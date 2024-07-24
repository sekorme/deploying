import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
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

const [isLoading, setIsLoading] = React.useState(false)

const router = useRouter()


const form = useForm<FormValues>({
    defaultValues:{
        pollingStationName: current?.pollingStationName || '',
        nppVotes: current?.nppVotes || 0,
        ndcVotes: current?.ndcVotes ||0,
        cppVotes:current?.cppVotes ||0,
        location:current?.location ||"",
        rejectedBallot: current?.rejectedBallot || 0,
        totalVoteCast: current?.totalVoteCast || 0,
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
        <Input className="active:bg-green-600 transition-all"  {...register('ndcVotes',{valueAsNumber:true})} type="text" />
      
     </td>
     <td className="p-4m border-red-600">
        <Input className="active:bg-blue-600" {...register('nppVotes',{valueAsNumber:true})} type="text"/>
      
     </td>
     <td className="p-4 border-yellow-600">
        <Input className="active:bg-yellow-200" {...register('cppVotes',{valueAsNumber:true})} type="text"/>
      
     </td>
     <td className="p-4">
        <Input {...register('totalVoteCast',{valueAsNumber:true})} type="text"/>
      
     </td>
     <td className="p-4">
        <Input {...register('rejectedBallot',{valueAsNumber:true})} type="text"/>
      
     </td>

     <td  className="p-4">
        <Input {...register('turnedOut',{valueAsNumber:true})} type="text"/>
      
     </td>
     <td className="p-4">
        <Button onClick={handleSubmit(onSubmit)} disabled={isLoading} >{isLoading ? 'Sending..': 'Send'}</Button>
     </td>
    </tr>
  )
}

export default UpdatePage