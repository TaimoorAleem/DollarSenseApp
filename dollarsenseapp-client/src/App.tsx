import './App.css'
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="flex flex-col h-screen  items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Welcome to</h1>
      <h1 className="text-7xl font-bold mb-10">Dollar Sense</h1>
      <div className="space-x-2">
        <Button className="font-semibold py-2 px-4 border-orange-600 hover:bg-orange-600 shadow-orange" variant={'outline'}>
          Login
        </Button>
        <Button className="font-semibold py-2 px-4 border-orange-600 hover:bg-orange-600 shadow-orange" variant={'outline'}>
          Register
        </Button>
      </div>
    </div>
  );
}

export default App
