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

import { PlusCircle } from "lucide-react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
  

const RecentTransactions = () => {
  
  return (
    <div>
        <div className="flex flex-row justify-between align-middle items-center m-2 h-10">
          <h2>Your Recent Transactions</h2>
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
                    placeholder="Walmart Shopping"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="transaction-category" className="text-right">
                    Category
                  </Label>
                  <Input
                    id="transaction-category"
                    placeholder="Grocery"
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
        <Table className="bg-secondary rounded-xl p-4 mt-2">
          <TableHeader>
            <TableRow>
              <TableHead className="text-left px-6 py-3">Transaction Name</TableHead>
              <TableHead className="text-left px-6 py-3">Category</TableHead> {/* New Category Column */}
              <TableHead className="text-right px-6 py-3">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-left px-6 py-3">Walmart</TableCell>
              <TableCell className="text-left px-6 py-3">Grocery</TableCell>
              <TableCell className="text-right px-6 py-3">$50.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left px-6 py-3">Internet</TableCell>
              <TableCell className="text-left px-6 py-3">Utilities</TableCell>
              <TableCell className="text-right px-6 py-3">$60.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left px-6 py-3">Gas</TableCell>
              <TableCell className="text-left px-6 py-3">Transportation</TableCell>
              <TableCell className="text-right px-6 py-3">$100.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left px-6 py-3">Electricity Bill</TableCell>
              <TableCell className="text-left px-6 py-3">Utilities</TableCell>
              <TableCell className="text-right px-6 py-3">$75.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left px-6 py-3">Popeyes</TableCell>
              <TableCell className="text-left px-6 py-3">Food & Dining</TableCell>
              <TableCell className="text-right px-6 py-3">$15.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left px-6 py-3">Netflix</TableCell>
              <TableCell className="text-left px-6 py-3">Entertainment</TableCell>
              <TableCell className="text-right px-6 py-3">$15.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left px-6 py-3">Gym Membership</TableCell>
              <TableCell className="text-left px-6 py-3">Health & Fitness</TableCell>
              <TableCell className="text-right px-6 py-3">$45.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left px-6 py-3">Car Insurance</TableCell>
              <TableCell className="text-left px-6 py-3">Insurance</TableCell>
              <TableCell className="text-right px-6 py-3">$120.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </div>
  )
}

export default RecentTransactions