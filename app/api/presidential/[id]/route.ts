"use server"
import {NextRequest, NextResponse} from "next/server"
import prisma from "@/utils/prismadb"
import { getServerSession } from "next-auth"
import Nextauth from "@/pages/api/auth/[...nextauth]"




export async function PATCH(req: NextRequest, {params}: {params: any}){

   try {
     const session = await getServerSession(Nextauth)

    if(!session) return NextResponse.json({message: "Unauthorized"}, {status: 401})
    const body = await req.json()
    const  {location, pollingStationName, nppVotes, ndcVotes, cppVotes, rejectedBallot, totalVoteCast, turnedOut} = body;
            
const {id} = params
    const parliamentray = await prisma.presidentialStation.update({
        where:{
            id
            

        },
        data:{
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

      if(!parliamentray) return NextResponse.json({message: "Not Found"}, {status: 404})

    return NextResponse.json(parliamentray,{status:200})
   } catch (error) {
    

    return NextResponse.json({message: "An Error Occured"}, {status: 500})
   }
}