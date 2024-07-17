'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
 } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LockKeyhole, ShieldMinus } from "lucide-react"
import Link from "next/link"
import Image from 'next/image';

import {z} from "zod"

import {useState } from "react"

import { authFormSchema } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import axios from "axios"
import {signIn} from "next-auth/react"
import toast, { Toaster } from "react-hot-toast";


// Setting the input field parameters ...

const LoginInterface = ({type}:{type:string}) => {
   const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
 

  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  }= useForm <FieldValues>({
    defaultValues:{
       username: '',
       password: '',
       name:'',
       phone:''
    } 
  })

   const onSubmit: SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true)
      if(type === "sign-up"){
         setIsLoading(true)
        axios.post('http://localhost:3000/api/user',data)
        .then(()=>{
          router.push('/dashboard')
        })
        .catch((error)=>{console.log(error); toast.error("An error occured")})
        .finally(()=>{
          setIsLoading(false)
        })
      }
     
     if (type==="sign-in"){
       signIn('credentials',{...data, redirect: false})
      .then((
        callback
      )=>{
       

        if(callback?.ok){
           router.push('/dashboard')
           toast.success("Access Granted - redirecting..")
           setIsLoading(false)
           
        }
       
        if(callback?.error){
          toast.error(`something went wrong ${callback.error}`)
          setIsLoading(false)
        }
        
      })
     }
    }
  

//Loging into account

  return (

    <section className="flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8 shadow-3xl">
      
      
        <Card className="p-10 bg-white  shadow-2xl rounded-[10px] ">
          <header className="flex flex-col gap-5 md:gap-8 items-center">
            <Link className="flex cursor-pointer items-center gap-2 " href="/">
              <Image src="/logo.jpg" width={80} height={80} alt="Horizon Logo" className=" rounded-full shadow-2xl"/>
            </Link>
          </header>
          <div className="flex flex-col gap-8 mt-4">
            <Input 
             {...register('username')}
         
             placeholder ="example@user.com"
           
            />
            <Input 
             
             type="password"
              placeholder ="*****"
              
             {...register('password')}
             
            />
            {
              type === 'sign-up' &&(
                <>
                  <Input 
        
            
              placeholder ="name"
              
             {...register('name')}
             
            />
            <Input 
       
           
              placeholder ="phone"
              
             {...register('phone')}
             
            />
            
</>
              )
            }
          
             <Button className="mt-6"  onClick={handleSubmit(onSubmit)} disabled ={isLoading} >
            {isLoading?"Accessing...": "Sign In"}
          </Button>
            <p className="flex items-center justify-center text-sm ">Protected By SekormeTech <ShieldMinus/></p>
          </div>
        </Card>
      
      
    </section>
  )
}

export default LoginInterface