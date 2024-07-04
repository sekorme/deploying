import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'
import {z} from "zod"
import {Control, FieldPath} from "react-hook-form"
import { authFormSchema } from '@/lib/utils'


const formSchema = authFormSchema('sign-up')

interface CustomInput{
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>> ,
    label?: string,
    placeholder?: string
}


const CustomInput : React.FC <CustomInput> = ({control, name, label, placeholder}) => {
  return (
      <FormField
          control={control}
          name={name}
          render={({ field }) => (
           <div className="flex flex-col gap-1.5">
               <FormLabel className="text-xl 4 w-full max-w-[280px] font-medium text-gray-700 ">
                    {label}
               </FormLabel>
               <div className="flex w-full flex-col">
                  <FormControl>
                    <Input placeholder={placeholder} className="input-class" {...field} type={name === 'password' ? 'password' : 'text'}/>
                  </FormControl>
                  <FormMessage className="form-message mt-2" />

                  
               </div>
           </div>
          )}
        />
  )
}

export default CustomInput