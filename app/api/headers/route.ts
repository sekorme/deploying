import prisma from "@/utils/prismadb"
import {NextResponse} from "next/server"

export async function POST(req:Request){
   try {
     const body = await req.json()
    const {ndc, npp, pollStation, cpp, total, rejected, turnedOut, action} = body

    const header = await prisma.tableHeader.create({
        data:{
            ndc,
            npp,
            pollStation,
            cpp,
            total,
            rejected,
            turnedOut,
            action,
        }
    })

    return NextResponse.json(header)
   } catch (error) {
       return NextResponse.json('An Error Occured')
    
   }
}