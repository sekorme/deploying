import bcrypt from "bcrypt"
import {NextResponse} from "next/server"
import prisma from "@/utils/prismadb"
import { isBooleanObject } from "util/types";


export async function POST( request: Request){
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


export async function GET(request: Request){
    try {

        const branch = await prisma.user.findMany()
        const other = branch.map(({hashedPassword, ...user}) => user)
        

        return NextResponse.json(other)
    } catch (error) {
        return NextResponse.json('An Error Occured')
    }
}