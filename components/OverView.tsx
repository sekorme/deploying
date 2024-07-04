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
            <CardTitle className="text-green-600">Presidential Election Results</CardTitle>
            <CardDescription >
              overview of the presidential now  election results
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-1 md:grid-cols-2 sm:grid-cols-1 w-full items-center justify-center ">
           
            <div className="total-balance-chart w-[350px]">
             <DoughnutChart/>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center justify-center gap-1  ">
             <div className="">
             <DataCard title="Total Vote" desc="Total Votes Cast" icon="/user-plus.svg" value="4670" cl="bg-green-700 " tl="text-white" sp="text-white"/>
            </div>
             <div className="">
           <DataCard title="Rejected" desc="Reject Ballots" icon="/ban.svg" value="40" cl="bg-red-600" tl="text-white" sp="text-white"/>
            </div>
            <div className="">
             <DataCard title="Turned Out" desc="No. of voters" icon="/user-round-check.svg" value="40" tl="text-green-600" />
            </div>
            <div className="">
             <DataCard title="P. Stations" desc="No. of Polling Stations" icon="/map-pinned.svg" value="120/180" cl="bg-gray-800" tl="text-white" sp="text-white"/>
            </div>
           </div>

           


          </CardContent>
          <CardFooter>
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mt-5 gap-4">
            <CandidateCard image="jm8.jpeg" name="NDC Candidate"/>
            <CandidateCard image="bw8.jpg" name="NPP Candidate"/>
            <CandidateCard image="chd8.jpg" name="CPP Candidate"/>
           
           </div>

          </CardFooter>
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
          <CardContent className="grid grid-cols-1 gap-1 md:grid-cols-2 sm:grid-cols-1 w-full items-center justify-center ">
           
            <div className="total-balance-chart w-[350px]">
             <DoughnutChart/>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center justify-center gap-1  ">
             <div className="">
             <DataCard title="Total Vote" desc="Total Votes Cast" icon="/user-plus.svg" value="4670" cl="bg-green-700 " tl="text-white" sp="text-white"/>
            </div>
             <div className="">
           <DataCard title="Rejected" desc="Reject Ballots" icon="/ban.svg" value="40" cl="bg-red-600" tl="text-white" sp="text-white"/>
            </div>
            <div className="">
             <DataCard title="Turned Out" desc="No. of voters" icon="/user-round-check.svg" value="40" tl="text-green-600" />
            </div>
            <div className="">
             <DataCard title="P. Stations" desc="No. of Polling Stations" icon="/map-pinned.svg" value="120/180" cl="bg-gray-800" tl="text-white" sp="text-white"/>
            </div>
           </div>

           


          </CardContent>
          <CardFooter>
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mt-5 gap-4">
            <CandidateCard image="tina.jpg" name="NDC Candidate"/>
            <CandidateCard image="chris.jpg" name="NPP Candidate"/>
            <CandidateCard image="tina.jpg" name="CPP Candidate"/>
           
           </div>

          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

    
    </>
  )
}
