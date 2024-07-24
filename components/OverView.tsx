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
import DoughnutChart from "./DoughnutChart"
import DataCard from "./DataCard"
import CandidateCard from "./CandidateCard"
import ParliamentaryOverView from "./ParliamentaryOverView"
import PresidentOverView from "./PresidentOverView"


export function OverView() {
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
     
           <PresidentOverView/>
          
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
            <ParliamentaryOverView/>
        </Card>
      </TabsContent>
    </Tabs>
    </>
  )
}
