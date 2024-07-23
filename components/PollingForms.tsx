 'use client'
import toast,{Toaster}from "react-hot-toast"
import { Input } from "./ui/input"
import {Label} from "./ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import {Button} from "./ui/button"
import {useForm, FieldValues, SubmitHandler} from "react-hook-form"
import {PollingStation} from "@prisma/client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

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

const PollingForms = ({type}:{type:string}, {submit}:{submit?:PollingStation}) => {
   const [isLoading, setIsLoading] = useState(false)
   const router = useRouter()

//submit form data
const form = useForm<FormValues>({
    defaultValues:{
        pollingStationName: "",
        nppVotes: 0,
        ndcVotes: 0,
        cppVotes:0,
        location:"",
        rejectedBallot:0,
        totalVoteCast:0,
        turnedOut:0,
      
    }
})



const {register, handleSubmit, formState} = form;

const onSubmit = async(data: FormValues) => {
    
    if(type === 'presidential'){
         try {
               setIsLoading(true)
              
             await axios.post(`/api/presidential`,data); 
              toast.success('posted successfully')
               router.refresh()
               window.location.reload()
               setIsLoading(false)
 } catch (error) {
               setIsLoading(false)
               toast.error('An error occured')
              }
};

 if(type==='parliamentary'){
     try {
               setIsLoading(true)
               
              await axios.post(`/api/parliamentary`,data); 
              toast.success('posted successfully')
               router.refresh()
               window.location.reload()
               setIsLoading(false)
 } catch (error) {
               setIsLoading(false)
               toast.error('An error occured')
              }
};
 }

    

  return (
   <>
     <Card className="bg-white w-full shadow-2xl mt-3">
        <CardHeader>
            <CardTitle>
                ENTER POLLING DETAILS
            </CardTitle>
        </CardHeader>
        <CardContent>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row w-full items-center gap-4 mt-5">
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="pollingStationName">Polling Station </Label>
                    <Input id="pollingStationName" placeholder="Enter Polling Station name" {...register('pollingStationName')} />
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="nppVote">Npp Votes</Label>
                    <Input id="nppVote" placeholder="Enter Npp Votes" type="number" {...register('nppVotes',{valueAsNumber:true})} />
                </div>
            </div>

             <div className="flex flex-row w-full items-center gap-4 mt-5">
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="ndcVotes">Ndc Votes</Label>
                    <Input id="ndcVotes" placeholder="Enter Ndc Votes" type="number" {...register('ndcVotes',{valueAsNumber:true})}/>
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="cppVotes">Cpp Votes</Label>
                    <Input id="cppVotes" placeholder="Enter Cpp Votes" type="number" {...register('cppVotes',{valueAsNumber:true})}/>
                </div>
            </div>

             <div className="flex flex-row w-full items-center gap-4 mt-5">
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="location">Town</Label>
                    <Input id="location" placeholder="Enter Town Name" {...register('location')} onChange={(event) => {
    event.target.value = event.target.value.toLowerCase();
  }} />
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="rejectedBallot">Rejected Ballots</Label>
                    <Input id="rejectedBallot" placeholder="Enter Rejected Ballots" type="number" {...register('rejectedBallot',{valueAsNumber:true})} />
                </div>
            </div>

             <div className="flex flex-row w-full items-center gap-4 mt-5">
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="totalVoteCast">Total Votes</Label>
                    <Input id="totalVoteCast" placeholder="Enter total votes" type="number" {...register('totalVoteCast',{valueAsNumber:true})}/>
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="turnedOut">Turned Out</Label>
                    <Input id="turnedOut" placeholder="Enter turned out" type="number" {...register('turnedOut',{valueAsNumber:true})} />
                </div>
            </div>
            <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"  disabled={isLoading}>{isLoading ? "Adding....":"Submit"}</Button>
        </form>
        </CardContent>
        
     </Card>
   </>
  )
}

export default PollingForms