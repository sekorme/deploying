import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import CollatedResults from './CollatedResults'
import prisma from '../utils/prismadb';

const ResultsPage = async() => {
const data = await prisma.pollingStation.findMany()
  const data2 = await prisma.presidentialStation.findMany()

  return (
     <>
    <Tabs defaultValue="presidential" className="w-full mt-5">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="presidential" className=" ">Presidential</TabsTrigger>
        <TabsTrigger value="parliamentary" className="">Parliamentary</TabsTrigger>
      </TabsList>
      <TabsContent value="presidential">
             <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Presidential  Election Results</CardTitle>
            <CardDescription >
              Overview of the presidential election results
            </CardDescription>
          </CardHeader>
     
        <CollatedResults filterData={data2} type="presidential"/>
          
        </Card>
      </TabsContent>
      <TabsContent value="parliamentary" className="">
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-500">Parliamentary Election Results</CardTitle>
            <CardDescription >
              overview of the parliamentary election results
            </CardDescription>
          </CardHeader>
            <CollatedResults filterData={data} type="parliamentary"/>
        </Card>
      </TabsContent>
    </Tabs>
    </>
  )
}

export default ResultsPage