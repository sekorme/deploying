'use client'
import { Link, LockKeyhole, ShieldMinus } from 'lucide-react'
import email from 'next-auth/providers/email'
import { Input } from './ui/input'
import React,{FormEventHandler, useState} from 'react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import Image from "next/image"

interface Action{
    onSubmit: FormEventHandler<HTMLFormElement>
}

interface InputD{
    email: string,
    password: string
}
const Form = ({onSubmit}:Action) => {

      const [email, setEmail] = useState<InputD>({
        email: '',
        password: ''
        
      })
  const [password, setPassword] = useState('')
  return (
      <form onSubmit={onSubmit}>
        <Card className="p-10 bg-white  shadow-2xl rounded-[10px] ">
          <header className="flex flex-col gap-5 md:gap-8 items-center">
            <Link className="flex cursor-pointer items-center gap-2 " href="/">
              <Image src="/logo.jpg" width={80} height={80} alt="Horizon Logo" className=" rounded-full shadow-2xl"/>
            </Link>
          </header>
          <div className="flex flex-col gap-8 mt-4">
            <Input 
              name="email"
              value={email.email}
              placeholder ="example@user.com"
              onChange ={(e)=> setEmail({ ...email, email: e.target.value })}
            />
            <Input 
              name="password"
              placeholder ="*****"
              type="password"
              value ={password}
              onChange ={(e)=> setPassword(e.target.value )}
            />
            <Button className="mt-5 rounded-xl gap-2" type="submit"> <LockKeyhole/>  Sign In</Button>
            <p className="flex items-center justify-center text-sm ">Protected By SekormeTech <ShieldMinus/></p>
          </div>
        </Card>
      </form>
  )
}

export default Form