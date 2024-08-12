import React from 'react'
import {Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { DrawerButton } from '@/components/DrawerButton'
import LoginInterface from '@/components/LoginInterface'
import UserTable from "@/components/UserTable"
import prisma from "../../../utils/prismadb"

const Users = async () => {
let data = await prisma.user.findMany()

  return (
   <Card className="bg-white  shadow-2xl mt-20 xl:mt-5">
      <CardHeader>
        <CardTitle>
          Users Page
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
           <LoginInterface type="sign-up"/>
      </CardContent>
      <CardFooter>
         <UserTable data={data}/>
      </CardFooter>
   </Card>
  )
}

export default Users