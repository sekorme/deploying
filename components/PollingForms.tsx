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



const PollingForms = ({type}:{type:string}, {submit}:{submit?:PollingStation}) => {
   const [isLoading, setIsLoading] = useState(false)
   const router = useRouter()

//submit form data
const {register, formState:{errors},handleSubmit, setValue, watch} = useForm<FieldValues>({
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


 const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    };


const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    
  try {
               setIsLoading(true)
               if(submit)
                   await axios.patch(`/api/parliamentary/${submit.id}`,data); 
               
               else
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

  return (
   <>
     <Card className="bg-white w-full shadow-2xl mt-3">
        <CardHeader>
            <CardTitle>
                ENTER POLLING DETAILS
            </CardTitle>
        </CardHeader>
        <CardContent>
            <form action="">
            <div className="flex flex-row w-full items-center gap-4 mt-5">
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="polling">Polling Station </Label>
                    <Input id="polling" placeholder="Enter Polling Station name" {...register('pollingStationName')} />
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="nppvote">Npp Votes</Label>
                    <Input id="nppvote" placeholder="Enter Npp Votes" type="number" {...register('nppVotes')} />
                </div>
            </div>

             <div className="flex flex-row w-full items-center gap-4 mt-5">
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="ndcvote">Ndc Votes</Label>
                    <Input id="ndcvote" placeholder="Enter Ndc Votes" type="number" {...register('ndcVotes')}/>
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="cppvote">Cpp Votes</Label>
                    <Input id="cppvote" placeholder="Enter Cpp Votes" type="number" {...register('cppVotes')}/>
                </div>
            </div>

             <div className="flex flex-row w-full items-center gap-4 mt-5">
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="town">Town</Label>
                    <Input id="town" placeholder="Enter Town Name" {...register('location')} onChange={(event) => {
    event.target.value = event.target.value.toLowerCase();
  }} />
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="rejected">Rejected Ballots</Label>
                    <Input id="rejected" placeholder="Enter Rejected Ballots" type="number" {...register('rejectedBallot')} />
                </div>
            </div>

             <div className="flex flex-row w-full items-center gap-4 mt-5">
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="total">Total Votes</Label>
                    <Input id="total" placeholder="Enter total votes" type="number" {...register('totalVoteCast')}/>
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                    <Label htmlFor="turned">Turned Out</Label>
                    <Input id="turned" placeholder="Enter turned out" type="number" {...register('turnedOut')} />
                </div>
            </div>
            <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={handleSubmit(onSubmit)} disabled={isLoading}>{isLoading ? "Adding....":"Submit"}</Button>
        </form>
        </CardContent>
        
     </Card>
   </>
  )
}

export default PollingForms