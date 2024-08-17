import React from 'react'
import CollateTable from './CollateTable'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 import prisma from '../utils/prismadb';
interface Props{
  params: {id:string}
}

const CollatePage = async() => {

  const data = await prisma.pollingStation.findMany()
  const data2 = await prisma.presidentialStation.findMany()
 
  return (
    <>
         <Tabs defaultValue="account" className="w-full mt-5">
      <TabsList className="grid w-full grid-cols-2 font-2xl">
        <TabsTrigger value="account">Presidential Entry Page</TabsTrigger>
        <TabsTrigger value="password">Parliamentary Entry Page</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle className="shadow-2xl text-green-600">Presidential </CardTitle>
            <CardDescription>
             Enter resutls for Presidential Elections only.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <CollateTable filterData={data2} type="presidential" />
          </CardContent>
          <CardFooter>
        
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">Parliamentatry</CardTitle>
            <CardDescription>
              Enter resutls for Parliamentary Elections only.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <CollateTable filterData={data}  type="parliamentary" />
          </CardContent>
          <CardFooter>
         
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </>
  )
}

export default CollatePage