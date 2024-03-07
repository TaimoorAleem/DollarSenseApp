import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "./ui/button"
import { PlusCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
  

const RecentTransactions = () => {
  return (
    <div>
        <div className="flex flex-row justify-between items-center m-2">
          <h2 className="align-middle">Your Recent Transactions</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline"><PlusCircle className="mr-2 h-4 w-4" /> Add New</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create Transaction</DialogTitle>
                <DialogDescription>
                  Please enter the following transactional details.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="transaction-name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="transaction-name"
                    placeholder="Groceries"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="transaction-amount" className="text-right">
                    Amount
                  </Label>
                  <Input
                    id="transaction-amount"
                    placeholder="$50.00"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit">Add</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Table className="bg-secondary rounded-xl p-4">
            <TableHeader>
                <TableRow>
                <TableHead className="text-left px-6 py-3 w-1/2">Transaction Name</TableHead>
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