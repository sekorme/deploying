import bcrypt from "bcrypt"
import {NextResponse} from "next/server"
import prisma from "@/utils/prismadb"
import { isBooleanObject } from "util/types";
import { getSession } from "@/lib/server/getCurrentUser";
import {getServerSession} from "next-auth"
import Nextauth from "@/pages/api/auth/[...nextauth]";


export async function POST( request: Request){
    
    try{
      const session = await getServerSession(Nextauth)

    if(!session) return NextResponse.json({message: "Unauthorized"}, {status: 401})
        
    
    const body = await request.json()

    const {username, name, phone, password} = body;
    
  
    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
        data: {
            username,
            name,
            hashedPassword,
            phone
        
           
           
        }
    })

    return NextResponse.json(user)
        

    }
    
    catch(error){
      return NextResponse.json({message: 'An unable to create new user'})
    }
    
}


export async function GET(request: Request){
    try {
        const session = await getServerSession(Nextauth)

        if(!session) return NextResponse.json({message: "Unauthorized"}, {status: 401})

        const branch = await prisma.user.findMany()
        const other = branch.map(({hashedPassword, ...user}) => user)
        

        return NextResponse.json(other)
    } catch (error) {
        return NextResponse.json('An Error Occured')
    }
}