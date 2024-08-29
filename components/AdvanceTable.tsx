import React from 'react'
import {Card, CardHeader,  CardContent, CardTitle, CardFooter} from "@/components/ui/card"
const AdvanceTable = () => {
  return (
    <div>
      <Card>
         <CardHeader>
           <CardTitle>
               Hi Everyone, how are you ?
           </CardTitle>
             <CardContent>
                <p>
                  I am fine, thank you.
                </p>
             </CardContent>

             <CardFooter>
                 <h1>
                     Good Bye
                 </h1>
             </CardFooter>
         </CardHeader>
      </Card>
    </div>
  )
}

export default AdvanceTable