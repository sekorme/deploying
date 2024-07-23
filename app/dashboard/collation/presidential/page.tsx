
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PollingForms from '../../../../components/PollingForms';

const Presidential = async () => {
  return (
   <>
       <Card className="bg-white mt-20 xl:mt-5">
            <CardHeader>
               <CardTitle>Presidential</CardTitle>
               <CardDescription>Presidential</CardDescription>
           </CardHeader>
           <CardContent>
              <PollingForms type="presidential"/>

             
           </CardContent>
       </Card>
   </>
  )
}

export default Presidential