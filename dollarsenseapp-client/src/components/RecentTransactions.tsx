import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "./ui/button"
import { PlusCircle } from "lucide-react"
  

const RecentTransactions = () => {
  return (
    <div>
        <div className="flex flex-row justify-between items-center m-2">
          <h2 className="align-middle">Your Recent Transactions</h2>
          <Button variant={"outline"} className="align-middle">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
        <Table className="bg-secondary rounded-xl p-4">
            <TableHeader>
                <TableRow>
                <TableHead className="text-left w-[100px] px-6 py-3 w-1/2">Transaction Name</TableHead>
                <TableHead className="text-right px-6 py-3 w-1/4">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                  <TableCell className="text-left font-medium px-6 py-3 w-1/2">Groceries</TableCell>
                  <TableCell className="text-right px-6 py-3 w-1/4">$50.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left font-medium px-6 py-3 w-1/2">Internet</TableCell>
                  <TableCell className="text-right px-6 py-3 w-1/4">$50.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-left font-medium px-6 py-3 w-1/2">Gas</TableCell>
                  <TableCell className="text-right px-6 py-3 w-1/4">$100.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
  )
}

export default RecentTransactions