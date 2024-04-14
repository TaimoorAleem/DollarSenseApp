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
import { Upload } from "lucide-react"
import axios from "axios"
  

const RecentTransactions = () => {
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
    <div>
        <div className="flex flex-row justify-between align-middle items-center m-2 h-10">
          <h2>Your Recent Transactions</h2>
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