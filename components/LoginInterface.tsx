"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Form } from "@/components/ui/form"
import { authFormSchema } from "@/lib/utils"
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import CustomInput from './CustomInput';
import {LockKeyhole, ShieldMinus} from "lucide-react"
import Link from "next/link"
import Image  from 'next/image';
import { useState } from "react"

const LoginInterface = ({type}:{type:string}) => {
  const [user, setUser] = useState(null)
  const formSchema = authFormSchema(type)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            firstName:"",
            lastName: "",
            phone:""
        }
    })





  return (
   <section className="flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8 shadow-3xl">
     <Form {...form}>
        <form>
        <Card className="p-10 bg-white  shadow-2xl rounded-[10px] ">

    <header className="flex flex-col gap-5 md:gap-8 items-center">
         <Link className="flex cursor-pointer items-center gap-2 " href="/">
            <Image src="/logo.jpg" width={80} height={80} alt="Horizon Logo" className=" rounded-full shadow-2xl"/>
            
          </Link>

          <div className="flex flex-col gap-1 md:gap-3">
              <h1 className="text-24 lg:text-36 font-semibold text-gray-900 text-center">
                {user ? 'Link Account' : type === 'sign-in' ? 'Sign In': 'Add a new user'}
                <p className="text-16 font-normal text-gray-600 text-center">
                    {user ? 'Link your account to get started': 'Please enter your details'}
                </p>
              </h1>
          </div>
       </header>


            <div className="flex flex-col gap-8 mt-4">

              {
                type === 'sign-up' &&(
                  <>
                   <div className="flex gap-2">
                     <CustomInput 
                    name="firstName"
                    label="First Name"
                    placeholder ="John"
                  />

                   <CustomInput 
                     name="lastName"
                     label="Last Name"
                     placeholder ="Doe"
                    />
                   </div>

                    <CustomInput 
                      name="phone"
                      label="Phone"
                      placeholder ="123-454-3343"
                    />
                  </>
                )
              }

            <CustomInput 
             name="email"
             label="User Name"
             placeholder ="example@user.com"
            />

              <CustomInput 
             name="password"
             label="Password"
             placeholder ="*****"
            />
          <Button className="mt-5 rounded-xl gap-2"> <LockKeyhole/>  Sign In</Button>
          <p className="flex items-center justify-center text-sm ">Protected By SekormeTech <ShieldMinus/></p>
          </div>
        </Card>
        </form>
     </Form>
   </section>
  )
}


export default LoginInterface