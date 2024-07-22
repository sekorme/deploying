
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PollingForms from '../../../../components/PollingForms';

const Presidential = async () => {
  return (
   <>
       <Card className="bg-white">
            <CardHeader>
               <CardTitle>Presidential</CardTitle>
               <CardDescription>Presidential</CardDescription>
           </CardHeader>
           <CardContent>
              <PollingForms type=""/>

             
           </CardContent>
       </Card>
   </>
  )
}

export default Presidential