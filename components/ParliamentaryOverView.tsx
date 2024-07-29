'use client'
import React,{useState, useEffect} from 'react'
import { CardContent, CardFooter } from './ui/card'
import DoughnutChart from './DoughnutChart'
import DataCard from './DataCard'
import CandidateCard from './CandidateCard'
import toast  from 'react-hot-toast'
import axios from 'axios'


async function fetchData() {
  const response = await fetch('/api/parliamentary', { method: 'GET', cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

const ParliamentaryOverView = () => {
 const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (err:any) {
        setError(err.message);
        setLoading(false);
      }
    };

    getData();
  }, []);

  



const totalNdcVotes = data.reduce((acc:any, curr:any) => acc + curr.ndcVotes, 0);
const totalNppVotes = data.reduce((acc:any, curr:any) => acc + curr.nppVotes, 0);
const totalRejectedVotes = data.reduce((acc:any, curr:any) => acc + curr.rejectedBallot, 0);
const totalVotes = data.reduce((acc:any, curr:any) => acc + curr.totalVoteCast, 0);
const totalCppVotes = data.reduce((acc:any, curr:any) => acc + curr.cppVotes, 0);
const countRejectedBallots = data.filter(item => item.totalVoteCast > 0).length;
const  allRejected = data.map((item:any) => item.totalVoteCast >0).length;
const totalTurnedOut = data.reduce((acc:any, curr:any) => acc + curr.turnedOut,0)

const ndcPercentage = ((totalNdcVotes / totalTurnedOut) * 100).toFixed(2);
const nppPercentage = ((totalNppVotes / totalTurnedOut) *100).toFixed(2);
const cppPercentage =((totalCppVotes / totalTurnedOut) * 100).toFixed(2)


//find the hightsest number
const highestVotes = Math.max(totalNdcVotes, totalCppVotes, totalNppVotes);
const isNdcHighest = totalNdcVotes === highestVotes
const isNppHighest = totalNppVotes === highestVotes
const isCppHighest = totalCppVotes === highestVotes


//finding the lowest number
const lowestVotes = Math.min(totalNdcVotes, totalCppVotes, totalNppVotes)
const isNdcLowest = totalNdcVotes === lowestVotes
const isNppLowest = totalNppVotes === lowestVotes
const isCppLowest = totalCppVotes === lowestVotes

;
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
              <CandidateCard image="tina.jpg" logo="logo.jpg" name="NDC Candidate" pvotes={totalNdcVotes} percentage={ndcPercentage} cls={isNdcHighest ? 'bg-green-600 p-2 text-center text-white rounded-full' : isNdcLowest ? 'bg-red-500 text-white text-center rounded-full p-2': 'bg-yellow-500 text-center text-white rounded-full p-2'}/>
              <CandidateCard image="chris.jpg" logo="npp1.png"name="NPP Candidate"  pvotes={totalNppVotes} percentage={nppPercentage} cls={isNppHighest ? 'bg-green-600 p-2 text-center text-white rounded-full' : isNppLowest ? 'bg-red-500 text-white text-center rounded-full p-2': 'bg-yellow-500 text-center text-white rounded-full p-2'}/>
              <CandidateCard image="tina.jpg" logo="cpp.png" name="CPP Candidate" pvotes={totalCppVotes} percentage={cppPercentage} cls={isCppHighest ? 'bg-green-600 p-2 text-center text-white rounded-full' : isCppLowest ? 'bg-red-500 text-white text-center rounded-full p-2': 'bg-yellow-500 text-center text-white rounded-full p-2'}/>
            </div>
          </CardFooter>
    </>
  )
}

export default ParliamentaryOverView