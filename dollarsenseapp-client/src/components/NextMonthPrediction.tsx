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
import { useState } from "react";

const categories = [
  { name: 'Groceries', amount: '600.00' },
  { name: 'Utilities', amount: '300.00' },
  { name: 'Transportation', amount: '150.00' },
  { name: 'Shopping', amount: '250.00' },
  { name: 'Dining', amount: '200.00' },
];

const NextMonthPrediction = () => {
  const [showTable, setShowTable] = useState(false); // State to control table visibility

  const handleGeneratePrediction = () => {
    // Here you would normally call your backend to generate the predictions
    // For this example, we'll just show the table
    setShowTable(true);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center m-2 h-10">
        <h2 className="align-middle">April 2024's Predicted Analytics</h2>
        <Button onClick={handleGeneratePrediction} variant="outline"><PlusCircle className="mr-2 h-4 w-4" />Generate Prediction</Button>
      </div>
      
      {showTable && (
        <Table className="bg-secondary rounded-xl p-4 mt-5">
          <TableHeader>
            <TableRow>
              <TableHead className="text-left px-6 py-3">Category</TableHead> 
              <TableHead className="text-right px-6 py-3">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category, index) => (
              <TableRow key={index}>
                <TableCell className="text-left px-6 py-3">{category.name}</TableCell>
                <TableCell className="text-right px-6 py-3">${category.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  )
}

export default NextMonthPrediction