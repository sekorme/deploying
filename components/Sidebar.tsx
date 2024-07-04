 'use client'

import Link from "next/link"
import Image from "next/image"
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Footer from "./Footer"
import { ThemeButton } from "./ThemeButton"

const Sidebar = () => {

  const paths = usePathname()
 return (
    <div className="">
        <aside id="separator-sidebar" className= "h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="flex flex-col h-full px-3 py-4 overflow-y-auto   w-full  dark:bg-gray-800">
        <div className="flex items-center justify-between mb-8">
            <Link href="/">
                <div className="flex items-center gap-2">
                    <Image src="/logo1.svg" width={40} height={40} alt="Logo" className="rounded-full" />
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">NDC</h1>
                </div>
            </Link>
            </div>
        {sidebarLinks.map((item)=>(
             <ul className="space-y-2 font-medium mb-8 " key={item.name}>
            <li>
            <a href={item.path} className={`flex items-center p-2  ${paths === item.path ? 'p-3 rounded-xl bg-gray-800 text-white':'text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'} `}>
                <Image src={item.icon} width={30} height={30} alt="Icon"/>
               <span className="ms-3">{item.name}</span>
            </a>
         </li>
         
<hr className=" border-gray-400" />


      </ul>
        ))}

 <Footer  type="desktop"/>
       
    </div>
 
    </aside>



    </div>
  )
}

export default Sidebar