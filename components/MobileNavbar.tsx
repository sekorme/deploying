

import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SheetTrigger, Sheet, SheetContent, SheetClose } from "./ui/sheet"
import Footer from "./Footer"
import { ThemeButton } from "./ThemeButton"




const MobileNavbar = () => {

    const paths = usePathname()
  return (
   <section className="w-fulll max-w-[200px] ">
    <Sheet>
      <SheetTrigger>
    <Image src="/square-menu.svg" width={50} height={50} alt=""/>
      </SheetTrigger>
      <SheetContent  className="border-none bg-white">
           <Link className="flex cursor-pointer items-center gap-2 px-2" href="/">
            <Image src="/logo.jpg" width={50} height={50} className="rounded-full" alt="Logo"/>
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">NDC</h1>
          </Link>
        <div className="mobilenav-sheet">
            <SheetClose asChild>
                <nav className="flex h-full flex-col gap-2 pt-2 text-white">
          {sidebarLinks.map((item)=>(
             <ul className="space-y-1 font-medium mb-2 md:mb-0" key={item.name}>
            <li>
            <a href={item.path} className={`flex items-center p-2  ${paths === item.path ? 'p-3 rounded-xl bg-gray-800 text-white':'text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'} `}>
                <Image src={item.icon} width={30} height={30} alt="Icon"/>
               <span className="ms-3">{item.name}</span>
            </a>
         </li>
         
<hr className=" border-gray-400" />


      </ul>
        ))}
       

       <Footer  type="mobile"/>
                </nav>
            </SheetClose>
           
        </div>
        
          
      </SheetContent>

    </Sheet>
   </section>
  )
}

export default MobileNavbar