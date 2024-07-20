import LoginInterface from "@/components/LoginInterface";
import { getSession } from "@/lib/server/getCurrentUser";
import {  redirect } from "next/navigation";



export default async function Home() {
 const loggedIn = await getSession()
 if(loggedIn) redirect('/dashboard')
 
  return (
      <section className="flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <LoginInterface type={"sign-in"}/>
      </section>
  );
}
