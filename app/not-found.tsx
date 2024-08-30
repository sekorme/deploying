'use client'
import EmptyState from "@/components/EmptyState"

const NotFound = ()=>{
    return(
        <div className=" flex items-center justify-center">
              
          <EmptyState
           showReset
          />

        </div>
      
    )
}

export default NotFound