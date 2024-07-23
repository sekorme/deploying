import AdvanceTable from '@/components/AdvanceTable'
import CollateTable from '@/components/CollateTable'
import FilterTable from '@/components/FilterTable'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import PollingForms from '../../../../components/PollingForms';

const Parliamentary = () => {
  return (
  <>
  <Card className="bg-white mt-20 xl:mt-5">
    <CardHeader>
        <CardTitle className="text-green-600">
            Parliamenatry Election Results Entry Page
        </CardTitle>
    </CardHeader>

    <CardContent>
  <PollingForms type="parliamentary"/>
        
    </CardContent>
  </Card>
  </>
  )
}

export default Parliamentary