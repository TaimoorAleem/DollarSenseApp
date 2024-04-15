import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const RecentTransactions = () => {
  
  return (
    <div>
        <div className="flex flex-row justify-between align-middle items-center m-2 h-10">
          <h2>Your Recent Transactions</h2>
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