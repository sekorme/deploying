import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'
import {z} from "zod"
import {Control, FieldPath} from "react-hook-form"
import { authFormSchema, collateFormSchema } from '@/lib/utils'


const formSchema = collateFormSchema()

interface CustomInput{
    control?: Control<z.infer<typeof formSchema>>,
    name: string | number
    label?: string,
    placeholder?: string
    type?: string
    read?:true | false
}


const CustomInput : React.FC <CustomInput> = ({control,type, name, read, label, placeholder}) => {
  return (
      
             
               <div className="flex W-[50px] flex-col">
               
                    <Input placeholder={placeholder} className="input-class" type={type} readOnly ={read}/>
               
                 

                  
               </div>
       
  )
}

export default CustomInput