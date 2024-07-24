'use client'
import {useState, useMemo} from "react"

import { tableHeader, townNames } from '@/constants'
import CustomInput from './CustomInput';
import { useForm, FieldValues, SubmitHandler } from "react-hook-form"
import {number, z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { collateFormSchema } from '@/lib/utils';
import { TableHead } from './ui/table';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';''
import { PollingStation } from '@prisma/client';
import prisma from '../utils/prismadb';
import axios from "axios"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";
import UpdateButton from "./UpdateButton";
import UpdatePage from "@/app/dashboard/collation/[id]/UpdatePage";


interface CollateTableProps {

  filterData: any;

  type: string;

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



const CollateTable: React.FC<CollateTableProps> = ({ filterData, type }) => {




const router = useRouter()

const [isLoading, setIsLoading] = useState(false)
 const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 
const [updateState,setUpdateState] = useState('')

 
  const filteredData = useMemo(() => {
    return filterData.filter((item: any )=> {
      const matchesSearch = item.pollingStationName?.toLowerCase().includes(searchTerm.toLowerCase()) || item.town?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus ? item.location === filterStatus : true;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterStatus, filterData]);


  //Upating Data
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

  //submit form data

  const [list, setList]  = useState(filterData)



const {register, handleSubmit, formState} = form;

const onSubmit = async(data: FormValues) => {
    const id = filteredData.id; // Define the 'id' variable
    if(type === 'presidential'){
         try {
               setIsLoading(true)
              
             await axios.patch(`/api/presidential/${id}`,data); 
              toast.success('posted successfully')
               router.refresh()
               
               setIsLoading(false)
 } catch (error) {
               setIsLoading(false)
               toast.error('An error occured')
              }
};

 if(type==='parliamentary'){
     try {
               setIsLoading(true)
               
              await axios.patch(`/api/parliamentary/${id}`,data); 
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

function handleEdit(id: string) {
   setUpdateState(id)
  
}

  return (
    <Card className=" bg-white">
      <div className="flex items-center justify-between mt-10 p-3">
        <Input
          className="w-[60%] md:w-[40%] border-rose-700 shadow-2xl focus:ring-0 rounded-xl"
          type="text"
          placeholder="Search by Polling Station "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All</option>
          {townNames.map((item: any) => (
            <option key={item.town}>{item.town.toLowerCase()}</option>
          ))}
        </select>
      </div>
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-xl mt-5 p-3">
        <form >
        <table className="w-full  table-auto min-w-max ">
          <thead>
            {
              <tr>
                {Object.keys(tableHeader[0]).map((key) => (
                  <th key={key} className="font-bold text-xl text-green-600 mb-8">
                    {tableHeader[0][key as keyof typeof tableHeader[0]]}
                  </th>
                ))}
              </tr>
            }
          </thead>
          <tbody className="">
            {filteredData
              .filter((filteredData: any) => filteredData.totalVoteCast <= 0)
              .map((data: any) => (
                updateState === data.id ? <UpdatePage key={data.id} current ={data} list={list} setList={setList} type={type}/>:
                <tr key={data.id} className="border-b border-blue-gray-100 ">
                  <td className="p-4 ">{data.pollingStationName}</td>
                  {/* Directly use CustomInput for other known properties of data */}
                  <td className="p-4">
                    <CustomInput
                      placeholder={data.ndcVotes}
                      type="number"
                      {...register('ndcVotes',{valueAsNumber:true})}
                    />
                  </td>
                  <td className="p-4">
                    <CustomInput
                      placeholder={data.nppVotes}
                      {...register('nppVotes',{valueAsNumber:true})}
                      type="number"
                    />
                  </td>
                  <td className="p-4">
                    <CustomInput
                      placeholder={data.cppVotes}
                      type="number"
                      {...register('cppVotes',{valueAsNumber:true})}
                    />
                  </td>
                  <td className="p-4">
                    <CustomInput
                      placeholder={data.totalVoteCast}
                      {...register('totalVoteCast',{valueAsNumber:true})}
                      type="number"
                    />
                  </td>
                  <td className="p-4">
                    <CustomInput
                      placeholder={data.rejectedBallot}
                      {...register('rejectedBallot',{valueAsNumber:true})}
                      type="number"
                    />
                  </td>
                  <td className="p-4">
                    <CustomInput
                      placeholder={data.turnedOut}
                      {...register('turnedOut',{valueAsNumber:true})}
                      type="number"
                    />
                  </td>
                  {/* Repeat for other known numeric properties */}
                  <td>
                    <Button onClick={()=> handleEdit(data.id)} >Collate</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        </form>
      </div>
     
    </Card>
  );
}

export default CollateTable