import React from 'react'
import { CardContent, CardFooter } from './ui/card'
import DoughnutChart from './DoughnutChart'
import DataCard from './DataCard'
import CandidateCard from './CandidateCard'
import { toast } from 'react-hot-toast'


async function getData(){
  const data = await fetch('http://localhost:3000/api/parliamentary', {method: 'GET', cache:'no-store'})
 if(!data){
  throw new Error('Somehting went wrong')
  toast.error('something went wrong')
}

return data.json()
}

const ParliamentaryOverView = async() => {
const newdata = await getData()



const totalNdcVotes = newdata.reduce((acc:any, curr:any) => acc + curr.ndcVotes, 0);
const totalNppVotes = newdata.reduce((acc:any, curr:any) => acc + curr.nppVotes, 0);
const totalRejectedVotes = newdata.reduce((acc:any, curr:any) => acc + curr.rejectedBallot, 0);
const totalVotes = newdata.reduce((acc:any, curr:any) => acc + curr.totalVoteCast, 0);
const totalCppVotes = newdata.reduce((acc:any, curr:any) => acc + curr.cppVotes, 0);
const countRejectedBallots = newdata.map((item :any) => item.rejectedBallot =0 ).length;
const totalTurnedOut = newdata.reduce((acc:any, curr:any) => acc + curr.turnedOut,0)

const  allRejected = newdata.map((item:any) => item.rejectedBallot >0).length;
  return (
    <>
      <CardContent>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 sm:grid-cols-1 w-full items-center justify-center ">
              <div className="total-balance-chart w-[350px]">
                <DoughnutChart totalCppVotes={totalCppVotes} totalNdcVotes={totalNdcVotes} totalNppVotes ={totalNppVotes}/>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center justify-center gap-1">
                <DataCard  title="Total Vote" desc="Total Votes Cast" icon="/user-plus.svg" value={totalVotes} cl="bg-green-700 " tl="text-white" sp="text-white"/>
                <DataCard title="Rejected" desc="Reject Ballots" icon="/ban.svg" value={totalRejectedVotes} cl="bg-red-600" tl="text-white" sp="text-white"/>
                <DataCard title="Turned Out" desc="No. of voters" icon="/user-round-check.svg" value={totalTurnedOut} tl="text-green-600" />
                <DataCard title="P. Stations" desc="No. of Polling Stations" icon="/map-pinned.svg" value={countRejectedBallots +"/" + allRejected} cl="bg-gray-800" tl="text-white" sp="text-white"/>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mt-5 gap-4">
              <CandidateCard image="tina.jpg" name="NDC Candidate" pvotes={totalNdcVotes}/>
              <CandidateCard image="chris.jpg" name="NPP Candidate"  pvotes={totalNppVotes}/>
              <CandidateCard image="tina.jpg" name="CPP Candidate" pvotes={totalCppVotes}/>
            </div>
          </CardFooter>
    </>
  )
}

export default ParliamentaryOverView