import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CollationDialog from '@/components/CollationDialog'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Collation = () => {
  return (
    <>
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Collation</CardTitle>
        <CardDescription>Collation of the election results.</CardDescription>
      </CardHeader>
      <CardContent>
        <>
        <div className="flex flex-col items-center justify between">
         <Link href="/dashboard/collation/add">
         <Button>Add User</Button>
         </Link>
        </div>
        </>
      </CardContent>
    </Card>
    </>
  )
}

export default Collation