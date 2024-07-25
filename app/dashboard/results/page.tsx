import React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ResultsPage from '@/components/ResultsPage'

const Results = () => {
  
   return (
    <>
  <Card className=" mt-20 xl:mt-5 contrast-10 brightness-120 bg-white  shadow-2xl ">
      <CardHeader>
        <CardTitle>Results Page - Overview</CardTitle>
        <CardDescription>Overview of the election results.</CardDescription>
      </CardHeader>



        <CardContent>
        
          <>
         
          
          <ResultsPage/>
          
          </>
        
      </CardContent>

  </Card>

 
  </>
  )
  
}

export default Results