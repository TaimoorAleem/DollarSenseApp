import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import IncomeExpenseHistoryChart from "./IncomeExpenseHistoryChart"
import IncomeExpenseHistoryData from "../data/IncomeExpenseHistoryData"

const BudgetOverview = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center m-2 h-10">
          <h2 className="align-middle">Budget Overview</h2>
          
        </div>
      <div className="grid grid-cols-3">
        <Card className="m-2">
          <CardHeader>
            <CardTitle>Account Balance</CardTitle>
            <CardDescription>8th March 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-300">$25000</p>
          </CardContent>
        </Card>
        <Card className="m-2">
          <CardHeader>
            <CardTitle>Total Income</CardTitle>
            <CardDescription>March 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-500">$6000</p>
          </CardContent>
        </Card>
        <Card className="m-2">
          <CardHeader>
            <CardTitle>Total Expenses</CardTitle>
            <CardDescription>March 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-orange-500">$4500</p>
          </CardContent>
        </Card>
        
      </div>
      <div className="align-middle text-center">
        <IncomeExpenseHistoryChart data={IncomeExpenseHistoryData} />
      </div>
    </div>
  )
}

export default BudgetOverview