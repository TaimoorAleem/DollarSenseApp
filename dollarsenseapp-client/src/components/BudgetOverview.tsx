import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const BudgetOverview = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className="items-center mt-4 mb-2 col-span-2">
        <h2 className="align-middle">Budget Overview</h2>
      </div>
      <Card className="m-2">
        <CardHeader>
          <CardTitle>Total Income</CardTitle>
          <CardDescription>March 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-green-500">$6000</p>
        </CardContent>
      </Card>
      <Card className="m-2">
        <CardHeader>
          <CardTitle>Total Expenses</CardTitle>
          <CardDescription>March 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-yellow-500">$4500</p>
        </CardContent>
      </Card>
      <Card className="m-2 col-span-2">
        <CardHeader>
          <CardTitle>Account Balance</CardTitle>
          <CardDescription>8th March 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-blue-400">$25000</p>
        </CardContent>
      </Card>

    </div>
  )
}

export default BudgetOverview