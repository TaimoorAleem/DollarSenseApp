import Navbar from '../components/Navbar';
import RecentTransactions from '@/components/RecentTransactions';

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <h1 className="text-2xl mb-4">Dashboard</h1>
    <div className="grid grid-cols-2 gap-4 bg-background h-screen">
        <div className="col-start-2">
          <RecentTransactions />
        </div>
    </div>
    </>
  )
}

export default Dashboard