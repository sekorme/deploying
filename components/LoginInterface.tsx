

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LockKeyhole, ShieldMinus } from "lucide-react"
import Link from "next/link"
import Image from 'next/image';


// src/app/signup/page.jsx

// previous imports ...

import { ID } from "node-appwrite";
import { createAdminClient } from "../lib/server/appwrite"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function signUpWithEmail(formData: any) {
  "use server";

  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");

  const { account } = await createAdminClient();

  await account.create(ID.unique(), email, password);
  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("my-custom-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  redirect("/dashboard");
}

// the SignUpPage component ...

const LoginInterface = async({type}:{type:string}) => {
  return (
    <section className="flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8 shadow-3xl">
      <form action={signUpWithEmail}>
        <Card className="p-10 bg-white  shadow-2xl rounded-[10px] ">
          <header className="flex flex-col gap-5 md:gap-8 items-center">
            <Link className="flex cursor-pointer items-center gap-2 " href="/">
              <Image src="/logo.jpg" width={80} height={80} alt="Horizon Logo" className=" rounded-full shadow-2xl"/>
            </Link>
          </header>
          <div className="flex flex-col gap-8 mt-4">
            <Input 
              name="email"
              placeholder ="example@user.com"
            />
            <Input 
              name="password"
              placeholder ="*****"
              type="password"
            />
            <Button className="mt-5 rounded-xl gap-2" type="submit"> <LockKeyhole/>  Sign In</Button>
            <p className="flex items-center justify-center text-sm ">Protected By SekormeTech <ShieldMinus/></p>
          </div>
        </Card>
      </form>
    </section>
  )
}

export default LoginInterface