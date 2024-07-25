"use server"
import Nextauth from "@/pages/api/auth/[...nextauth]";
import prisma from "@/utils/prismadb"
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import {NextResponse} from "next/server"


export  async function POST(req: Request){
    try {
         const session = await getServerSession(Nextauth)

    if(!session) return NextResponse.json({message: "Unauthorized"}, {status: 401})
     const body = await req.json()

     const  {pollingStationName, nppVotes, ndcVotes, cppVotes, location, rejectedBallot, totalVoteCast, turnedOut} = body;

     const parliamentray = await prisma.pollingStation.create({
        data: {
            pollingStationName,
            nppVotes,
            ndcVotes,
            cppVotes,
            location,
            rejectedBallot,
            totalVoteCast,
            turnedOut
        }
     })

        return NextResponse.json(parliamentray)
    
 } catch (error) {
        return NextResponse.json('An Error Occured')
 }
}



export async function GET(req:Request){
    try{
      const parliamentary = await prisma.pollingStation.findMany()

   
      return NextResponse.json(parliamentary,{status:200})
     
    }
    catch(error){
        return NextResponse.json('An Error Occcured')
    }
}