
import LoginInterface from '@/components/LoginInterface'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import { SelectGroup } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Select as S, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectLabel } from '@/components/ui/select'
import Select from '@/components/Select'
import { OverView } from '@/components/OverView'
import CandidateCard from '@/components/CandidateCard'
import toast from "react-hot-toast"
import { totalCppVotes } from '@/constants';




const DashBoard = async() => {






  return (
    <>
  <Card className=" mt-20 xl:mt-5 contrast-10 brightness-120 bg-white  shadow-2xl ">
      <CardHeader>
        <CardTitle>Dashbaord - Overview</CardTitle>
        <CardDescription>Overview of the election results.</CardDescription>
      </CardHeader>



        <CardContent>
        
          <>
         
           <OverView
            
           />

          
          </>
        
      </CardContent>

  </Card>

  <div>
    Hello
  </div>
   
  </>
  )
}

export default DashBoard