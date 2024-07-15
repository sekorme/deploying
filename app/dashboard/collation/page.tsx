import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CollationDialog from '@/components/CollationDialog'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import CollatePage from '@/components/CollatePage'

const Collation = () => {
  return (
    <>
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Collation Page</CardTitle>
        <CardDescription>Collation of the election results.     Attention Data Entry Personnel: Please exercise caution when entering data for both parliamentary and presidential elections. Ensure accuracy and double-check all entries before submission.</CardDescription>
      </CardHeader>
      <CardContent>
        <>
        <div className="flex  items-center justify-around bg-black-2 mt-2 p-5 rounded-xl shadow-2xl">
         <Link href="/dashboard/collation/parliamentary">
         <Button className="bg-green-700 shadow-2xl">Create Parliamentary Polls</Button>
         </Link>

          <Link href="/dashboard/collation/presidential">
         <Button className="bg-red-600 shadow-2xl">Create Presidential Polls</Button>
         </Link>
        </div>

        <CollatePage/>
        </>
      </CardContent>
    </Card>
    </>
  )
}

export default Collation