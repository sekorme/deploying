'use client'
import React, { useEffect, useState } from 'react'
import { CardContent, CardFooter } from './ui/card'
import DoughnutChart from './DoughnutChart'
import DataCard from './DataCard'
import CandidateCard from './CandidateCard'
import toast  from 'react-hot-toast'


async function fetchData() {
  const response = await fetch('http://localhost:3000/api/presidential', { method: 'GET', cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

const PresidentOverView = () => {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;



    const totalNdcVotes = data.reduce((acc:any, curr:any) => acc + curr.ndcVotes, 0);
const totalNppVotes = data.reduce((acc:any, curr:any) => acc + curr.nppVotes, 0);
const totalRejectedVotes = data.reduce((acc:any, curr:any) => acc + curr.rejectedBallot, 0);
const totalVotes = data.reduce((acc:any, curr:any) => acc + curr.totalVoteCast, 0);
const totalCppVotes = data.reduce((acc:any, curr:any) => acc + curr.cppVotes, 0);
const countRejectedBallots = data.map((item :any) => item.rejectedBallot =0 ).length;
const totalTurnedOut = data.reduce((acc:any, curr:any) => acc + curr.turnedOut,0)

const  allRejected = data.map((item:any) => item.rejectedBallot >0).length;
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

export default PresidentOverView