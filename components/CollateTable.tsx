'use client'
import {useState, useMemo} from "react"

import { tableHeader, townNames } from '@/constants'
import CustomInput from './CustomInput';
import { useForm } from 'react-hook-form';
import {number, z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { collateFormSchema } from '@/lib/utils';
import { TableHead } from './ui/table';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';''
import { PollingStation } from '@prisma/client';
import prisma from '../utils/prismadb';




const CollateTable = ({filterData}:{filterData: any}) => {







 const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 


 
  const filteredData = useMemo(() => {
    return filterData.filter((item: any )=> {
      const matchesSearch = item.pollingStationName?.toLowerCase().includes(searchTerm.toLowerCase()) || item.town?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus ? item.location === filterStatus : true;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterStatus, filterData]);


 



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
      {townNames.map((item:any) => (
        <option key={item.town}>{item.town.toLowerCase()}</option>
      ))}
      </select>

  


  

  </div>
    <div
  className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-xl mt-5 p-3">
  <table className="w-full  table-auto min-w-max ">
    <thead>
     {
         <tr>
          {Object.keys(tableHeader[0]).map((key) => (
            <th key={key} className="font-bold text-xl text-green-600 mb-8">{tableHeader[0][key as keyof typeof tableHeader[0]]}</th>
          ))}
        </tr>
     }
    </thead>
    <tbody className="">
       {
filteredData.filter((filteredData:any) => filteredData.totalVoteCast <= 0).map((data:any) => (
    <tr key={data.id} className="border-b border-blue-gray-100 ">
      <td className="p-4">{data.pollingStationName}</td>
      {/* Directly use CustomInput for other known properties of data */}
      <td className="p-4">
        <CustomInput
          placeholder={String(data.ndcVotes)}
          name="ndcVotes"
          type="number"
        />
      </td>
      <td className="p-4">
        <CustomInput
          placeholder={String(data.nppVotes)}
          name="nppVotes"
          type="number"
        />
      </td>
      <td className="p-4">
        <CustomInput
          placeholder={String(data.cppVotes)}
          name="nppVotes"
          type="number"
        />
      </td>

      <td className="p-4">
        <CustomInput
          placeholder={String(data.totalVoteCast)}
          name="nppVotes"
          type="number"
        />
      </td>

      <td className="p-4">
        <CustomInput
          placeholder={String(data.rejectedBallot)}
          name="nppVotes"
          type="number"
        />
      </td>
      <td className="p-4">
        <CustomInput
          placeholder={String(data.turnedOut)}
          name="nppVotes"
          type="number"
        />
      </td>
      {/* Repeat for other known numeric properties */}
      <td>
        <Button>Add</Button>
      </td>
    </tr>
  ))
}
    </tbody>
  </table>
</div>

</Card>
  )
}

export default CollateTable