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

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";


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

  const handleFileUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
  
    // Append the file to the FormData instance
    formData.append('file', fileField.files[0]);
  
    // Use axios to send a post request
    axios.post('http://127.0.0.1:5000/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      // Handle response data
      console.log(response.data);
    })
    .catch(error => {
      console.error("Error uploading the file", error);
    });
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center m-2 h-10">
        <h2 className="align-middle">April 2024's Predicted Analytics</h2>
        <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline"><Upload className="mr-2 h-4 w-4" />Upload CSV</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Upload CSV File</DialogTitle>
                  <DialogDescription>
                    Please upload a CSV file of your most recent transactions
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleFileUpload}>
                  <div className="grid gap-4 py-4">
                    <input
                      type="file"
                      accept=".csv"
                      name="file"
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit">Upload</Button>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
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