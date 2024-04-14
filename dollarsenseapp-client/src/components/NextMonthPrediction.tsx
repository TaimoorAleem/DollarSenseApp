import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useEffect, useState } from "react";
import axios from "axios";


const NextMonthPrediction = () => {
  type Expense = {
    Vendor: string,
    Category: string;
    Predicted_Amount_Spent: number;
  };
  
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/predict')
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => console.error("There was an error fetching the expenses:", error));
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between items-center m-2 h-10">
        <h2 className="align-middle">April 2024's Predicted Analytics</h2>
      </div>
      <Table className="bg-secondary rounded-xl p-4 mt-5">
        <TableHeader>
          <TableRow>
            <TableHead className="text-left px-6 py-3">Vendor</TableHead> 
            <TableHead className="text-center px-6 py-3">Category</TableHead> 
            <TableHead className="text-right px-6 py-3">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense, index) => (
            <TableRow key={index}>
              <TableCell className="text-left px-6 py-3">{expense.Vendor}</TableCell>
              <TableCell className="text-center px-6 py-3">{expense.Category}</TableCell>
              <TableCell className="text-right px-6 py-3">${expense.Predicted_Amount_Spent.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default NextMonthPrediction