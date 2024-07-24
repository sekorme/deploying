
import LoginInterface from '@/components/LoginInterface'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import { SelectGroup } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Select as S, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectLabel } from '@/components/ui/select'
import Select from '@/components/Select'
import { OverView } from '@/components/OverView'
import CandidateCard from '@/components/CandidateCard'
import toast from "react-hot-toast"
import { totalCppVotes } from '@/constants';




async function getData(){
  const data = await fetch('http://localhost:3000/api/presidential', {method: 'GET', cache:'no-store'})
 if(!data){
  throw new Error('Somehting went wrong')
  toast.error('something went wrong')
}

return data.json()
}
const DashBoard = async() => {


const newdata = await getData()
const totalNdcVotes = newdata.reduce((acc:any, curr:any) => acc + curr.ndcVotes, 0);
const totalNppVotes = newdata.reduce((acc:any, curr:any) => acc + curr.nppVotes, 0);
const totalRejectedVotes = newdata.reduce((acc:any, curr:any) => acc + curr.rejectedBallot, 0);
const totalVotes = newdata.reduce((acc:any, curr:any) => acc + curr.totalVoteCast, 0);
const totalCppVotes = newdata.reduce((acc:any, curr:any) => acc + curr.cppVotes, 0);
const countRejectedBallots = newdata.map((item :any) => item.rejectedBallot  >0).length;

const  allRejected = newdata.map((item:any) => item.rejectedBallot).length;


  return (
    <>
  <Card className=" mt-20 xl:mt-5 contrast-10 brightness-120 bg-white  shadow-2xl ">
      <CardHeader>
        <CardTitle>Dashbaord - Overview</CardTitle>
        <CardDescription>Overview of the election results.</CardDescription>
      </CardHeader>



        <CardContent>
        
          <>
           <Select/>
           <OverView
            allRejected={totalRejectedVotes}
            totalNdcVotes = {totalNdcVotes}
            totalNppVotes = {totalNppVotes}
            totalVotes = {totalVotes}
            totalCppVotes = {totalCppVotes}
            countRejectedBallots = {countRejectedBallots}
           />

          
          </>
        
      </CardContent>

  </Card>

  <div>
    Hello
  </div>
   
  </>
  )
}

export default DashBoard