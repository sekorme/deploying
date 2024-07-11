import React from 'react'
import {Card, CardContent, CardFooter, CardTitle, CardHeader} from './ui/card'
import {Badge} from "./ui/badge"
import Image from 'next/image';



interface DataCardProps{
    title?: string;
    value?: number | string;
    icon: string;
    footer?: string;
    cl?:string
    tl?:string
    desc?: string
    sp?:string
    
}

const DataCard = ({title, value, icon, cl, tl, desc,sp } : DataCardProps ) => {
  return (
    <Card className={` shadow-2xl ${cl}`}>
        <CardHeader>
            <CardTitle className={`${tl}`}>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Image src={icon} alt="icon" width={50} height={50} className="w-8 h-8" />
                    <span className="text-xl font-bold ml-2 text-gray-400">
                     <div
                      className="relative grid items-center px-4 py-2 font-sans text-xl font-bold text-white uppercase bg-gray-900 rounded-md select-none whitespace-nowrap">
                      <span className="">{value}</span>
                    </div>
                   </span>
                    
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <div className="flex items-center justify-between">
               
                <span className={`text-sm ${sp}`}>{desc}</span>
             
            </div>
        </CardFooter>
    </Card>
  )
}

export default DataCard