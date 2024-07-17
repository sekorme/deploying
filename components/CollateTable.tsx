"use client"
import React, { useMemo, useState, useEffect } from 'react'
import { dataCollate, tableHeader, townNames } from '@/constants'
import CustomInput from './CustomInput';
import { useForm } from 'react-hook-form';
import {number, z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { collateFormSchema } from '@/lib/utils';
import { TableHead } from './ui/table';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card } from './ui/card';




const CollateTable = ({type2}:{type2:string}) => {

 const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 


 

  const filteredData = useMemo(() => {
    return dataCollate.filter(item => {
      const matchesSearch = item.pollingStation.pollingStationName.toLowerCase().includes(searchTerm.toLowerCase()) || item.town.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus ? item.town === filterStatus : true;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterStatus, dataCollate]);


const formSchema = collateFormSchema(type2)


 const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nppVotes: 0,
            ndcVotes: 0,
            pollingStation: "",
            cppVotes: 0,
            totalVote: 0,
            rejectedBallot: 0,
        }
    })

const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = filteredData.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);


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
      {townNames.map((item) => (
        <option key={item.town}>{item.town}</option>
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
            <th key={key}>{tableHeader[0][key as keyof typeof tableHeader[0]]}</th>
          ))}
        </tr>
     }
    </thead>
    <tbody>
      {
  filteredData.filter(filteredData => filteredData.pollingStation.totalVoteCast <= 0).map((data) => (
    <tr key={data.id} className="border-b border-blue-gray-100">
      {Object.keys(data.pollingStation).map((key) => {
        // Assuming all values except for 'pollingStationName' are numbers and should be displayed using CustomInput
        if (key === 'pollingStationName') {
          return <td key={key} className="p-4">{data.pollingStation[key]}</td>;
        } else {
          // For simplicity, placeholder is set to the value itself, adjust as needed
          return (
            <td key={key} className="p-4 ">
              <CustomInput 
                placeholder={data.pollingStation[key as keyof typeof data.pollingStation].toString()} 
                name={key} 
                type="number" // Assuming all other keys except 'pollingStationName' are numbers
              />
            </td>
          );
        }
      })}
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