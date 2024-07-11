 'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
    npp: 200,
    ndc:300,
    cpp:30
    
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
    npp: 200,
    ndc:300,
    cpp:30
    
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    npp: 200,
    ndc:300,
    cpp:30
    
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
    npp: 200,
    ndc:300,
    cpp:30
    
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    npp: 200,
    ndc:300,
    cpp:30
    
  },
   {
    id: "bhqeclo9",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    npp: 200,
    ndc:300,
    cpp:30
    
  },
   {
    id: "bhqecjri",
    amount: 200,
    status: "failed",
    email: "carmella@hotmail.com",
    npp: 100,
    ndc:300,
    cpp:30
    
  },
   {
    id: "bhqecj52",
    amount: 900,
    status: "failed",
    email: "carmella@hotmail.com",
    npp: 110,
    ndc:300,
    cpp:30
    
  },
]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  npp: number
  cpp:number
  ndc:number
}

const totalAmount = data.reduce((acc, payment) => acc + payment.amount, 0);
const nppTotal = data.reduce((acc2, nppdata) => acc2 + nppdata.npp, 0);
const cppTotal = data.reduce((acc3, cppdata) => acc3 + cppdata.cpp, 0);
const ndcTotal = data.reduce((acc4, ndcdata) => acc4 + ndcdata.ndc, 0);

const totalVotes = cppTotal + nppTotal + ndcTotal;

const nppPercentage = (nppTotal / totalVotes) * 100;
const ndcPercentage = (ndcTotal / totalVotes) * 100;
const cppPercentage = (cppTotal / totalVotes) * 100;

const FilterTable = () => {
 return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.filter(invoice => invoice.amount > 0).map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.status}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>{invoice.email}</TableCell>
        
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
       
          <TableCell className="text-right">{nppTotal}</TableCell>
          <TableCell className="text-right">{ndcTotal}</TableCell>
          <TableCell className="text-right">{cppTotal}</TableCell>
          
        </TableRow>
      
        <TableRow>
            <TableCell colSpan={3}>Total Votes</TableCell>
             <TableCell className="text-right">{totalVotes}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell colSpan={3}>Npp</TableCell>
             <TableCell className="text-right">{nppPercentage.toFixed(2) + "%"}</TableCell>
        </TableRow>
         <TableRow>
            <TableCell colSpan={3}>Ndc</TableCell>
             <TableCell className="text-right">{ndcPercentage.toFixed(2) + "%"}</TableCell>
        </TableRow>
         <TableRow>
            <TableCell colSpan={3}>cpp</TableCell>
            <TableCell className="text-right">{cppPercentage.toFixed(2)}%</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )

}

export default FilterTable