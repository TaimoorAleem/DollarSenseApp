import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const WelcomePage = () => {
  return (
    <div className="flex flex-col h-screen  items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Welcome to</h1>
      <h1 className="text-7xl font-bold mb-10">Dollar Sense</h1>
      <div className="space-x-2">
        <Link to="/dashboard">
          <Button className="font-semibold py-2 px-4 border-orange-600 hover:bg-orange-600 shadow-orange" variant={'outline'}>
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button className="font-semibold py-2 px-4 border-orange-600 hover:bg-orange-600 shadow-orange" variant={'outline'}>
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default WelcomePage