'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React,{useState} from 'react'
import {useForm, FieldValues, SubmitHandler} from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast"
import {useRouter} from "next/navigation"

interface Props{
    params:{id:string}
}
type FormValues ={
    pollingStationName: string
        nppVotes: number
        ndcVotes: number
        cppVotes:number
        location:string
        rejectedBallot: number
        totalVoteCast:number
        turnedOut:number
}

const UpdatePage = ({current, list,type}:any) => {

const [isLoading, setIsLoading] = useState(false)
  const [ndcVoter, setNdcVotes] = useState<number>(0);
  const [nppVoter, setNppVotes] = useState<number>(0);
  const [cppVoter, setCppVotes] = useState<number>(0);
 const [turnedOutt, setTurnedOut] = useState<number>(0);
  const [rejectedd, setRejected] = useState<number>(0);
  const [value, setValue] = useState<number>(0);

  
  

const router = useRouter()



const addValid = () =>{
  return  ndcVoter + nppVoter + cppVoter;
}

const valid = addValid();

const addTotal = () =>{
  return  turnedOutt + rejectedd
}
const val = addTotal()


const form = useForm<FormValues>({
    defaultValues:{
        pollingStationName: current?.pollingStationName || '',
        nppVotes: current?.nppVotes || 0,
        ndcVotes: current?.ndcVotes ||0,
        cppVotes:current?.cppVotes ||0,
        location:current?.location ||"",
        rejectedBallot:current?.rejectedBallot || 0,
        totalVoteCast:current?.totalVoteCast || 0,
        turnedOut: current?.turnedOut || 0,
      
    }
})

const {register, handleSubmit, formState} = form;


 const onSubmit =  async(data: FormValues) => {
     if(type==='presidential'){
       try {
      setIsLoading(true)
      await axios.patch(`/api/presidential/${current.id}`,data);
      
      toast.success('Collated successful')
      router.refresh()
      window.location.reload()
      // revalidate('/dashboard') // Removed undefined function call
      // Optionally, refresh the data in CollatePage or show a success message
     setIsLoading(false)
    } catch (error) {
      console.error('Error updating data', error);
      // Optionally, handle error (e.g., show an error message)
      toast.error('Error Updating')
      setIsLoading(false)
    }
     }


     if(type==='parliamentary'){
       try {
      setIsLoading(true)
      await axios.patch(`/api/parliamentary/${current.id}`,data);
      
      toast.success('Collated successful')
      router.refresh()
      // revalidate('/dashboard') // Removed undefined function call
      // Optionally, refresh the data in CollatePage or show a success message
     setIsLoading(false)
    } catch (error) {
      console.error('Error updating data', error);
      // Optionally, handle error (e.g., show an error message)
      toast.error('Error Updating')
      setIsLoading(false)
    }
     }
   }



  return (
    <tr>
        <td className="p-4">
            {current?.pollingStationName}
        </td>
     <td className="p-4 border-green-600">
        <Input id="ndcVotes" className="active:bg-green-600 transition-all"  {...register('ndcVotes',{valueAsNumber:true})} type="text" onChange={(e) =>  {setNdcVotes(Number(e.target.value))}}/>
      
     </td>
     <td className="p-4m border-red-600">
        <Input className="active:bg-blue-600" id="nppVotes" {...register('nppVotes',{valueAsNumber:true})} type="text" onChange={(e) =>  {setNppVotes(Number(e.target.value))}}/>
      
     </td>
     <td className="p-4 border-yellow-600">
        <Input className="active:bg-yellow-200" id="cppVotes" {...register('cppVotes',{valueAsNumber:true})} type="text" onChange={(e) =>  {setCppVotes(Number(e.target.value))}}/>
      
     </td>
     <td  className="p-4">
        <Input id="turnedOut" {...register('turnedOut',{valueAsNumber:true})} type="text"  onChange={(e) => {setTurnedOut(Number(e.target.value))}}/>
         <p className="text-sm text-gray-400"> total valid is {valid} </p>
     </td>
   
     <td className="p-4">
        <Input id="rejectedBallot" {...register('rejectedBallot',{valueAsNumber:true})} type="text"  onChange={(e) => {setRejected(Number(e.target.value))}}/>
      
     </td>

     
       <td className="p-4">
        <Input id="totalVoteCast" {...register('totalVoteCast',{valueAsNumber:true})}   type="text"/>
        <p className="text-sm text-gray-400"> total is {val} </p>
     </td>
     <td className="p-4">
        <Button onClick={handleSubmit(onSubmit)} disabled={isLoading} >{isLoading ? 'Sending..': 'Send'}</Button>
     </td>
    </tr>
  )
}

export default UpdatePage