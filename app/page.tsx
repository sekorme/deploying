import { Button } from "@/components/ui/button";
import Image from "next/image";
import {Mail} from "lucide-react"
import LoginInterface from "@/components/LoginInterface";
export default function Home() {
  return (
      <section className="flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <LoginInterface type={"sign-in"}/>
      </section>
  );
}
