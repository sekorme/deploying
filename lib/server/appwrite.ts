"use server"
import {Client, Account, Users, ID} from 'node-appwrite'
import {cookies} from "next/headers"






export async function createSessionClient(){
  
 const client = new Client();
    client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66907d350008a98a4f46');
 

 const session = cookies().get("my-custom-session");
 if(!session || !session.value){
    throw new Error("No session found");
 }

 client.setSession(session.value);

 return {
    get account(){
        return new Account(client)
    },
    
 }
}



export async function createAdminClient(){
    const client = new Client();
    client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)


    return {
        get account(){
            return new Account(client)
        },
        get User(){
            return new Users(client)
        }
    }
}


export async function getLoggedInUser(){
    const {account} = await createSessionClient();
    try{
        const user = await account.get();
        return user;
    }catch(error){
        console.log(error);
        return null;
    }
}