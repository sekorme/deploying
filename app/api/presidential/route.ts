import prisma from "@/utils/prismadb"
import { revalidatePath } from "next/cache";
import {NextResponse} from "next/server"


export  async function POST(req: Request){
    try {
     const body = await req.json()

     const  {pollingStationName, nppVotes, ndcVotes, cppVotes, location, rejectedBallot, totalVoteCast, turnedOut} = body;

     const parliamentray = await prisma.presidentialStation.create({
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
      const parliamentary = await prisma.presidentialStation.findMany()

      return NextResponse.json(parliamentary,{status:200})
     
    }
    catch(error){
        return NextResponse.json('An Error Occcured')
    }
}