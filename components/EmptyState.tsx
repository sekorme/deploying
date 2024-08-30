'use client'

import { useRouter } from "next/navigation"
import Heading from "./Heading"
import Button from "./Button"
import Image from "next/image"

interface EmptyStateProps{
    title ?: string
    subtitle ?: string
    showReset?: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({title ="Page Not Found", subtitle = "Try limiting or navigate back to the previous page", showReset}) => {

    const router = useRouter()
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center mt-20">

        <Heading
        center
          title ={title}
          subtitle={subtitle} 
        />
         <div>
           <Image src="/notfound2.gif" alt="not found" width={530} height={530} className="rounded-full  backdrop-blur-sm"/>
         </div>
        <div className="w-48 mt-4">
            {showReset &&(
              <Button
                outline
                label = "Return Back"
                onClick = {() =>router.push('/')}
              />
            )}
        </div>
    </div>
  )
}

export default EmptyState