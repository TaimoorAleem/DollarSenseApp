import BudgetOverview from '@/components/BudgetOverview';
import Navbar from '../components/Navbar';
import RecentTransactions from '@/components/RecentTransactions';
import NextMonthPrediction from '@/components/NextMonthPrediction';
import CategoricalSpendingsChart from '@/components/CategoricalSpendingsChart';

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className="grid grid-cols-2 gap-6 bg-background h-screen mt-5">
      <div className='col-start-1'>
        <BudgetOverview />
      </div>
      <div className="col-start-2">
        <RecentTransactions />
      </div>
      <div className="col-start-1">
        <CategoricalSpendingsChart />
      </div>
      <div className='col-start-2'>
        <NextMonthPrediction />
      </div>
    </div>
    </>
  )
}

export default Dashboard