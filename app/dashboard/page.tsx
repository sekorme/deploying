
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'



import OverView  from '@/components/OverView'




export default async function Dashboard() {






  return (
    <>
  <Card className=" mt-20 xl:mt-5 contrast-10 brightness-120 bg-white  shadow-2xl ">
      <CardHeader>
        <CardTitle>Dashbaord - Overview</CardTitle>
        <CardDescription>Overview of the election results.</CardDescription>
      </CardHeader>



        <CardContent>
        
          <>
         
           <OverView/>

          
          </>
        
      </CardContent>

  </Card>

 
  </>
  )
}

