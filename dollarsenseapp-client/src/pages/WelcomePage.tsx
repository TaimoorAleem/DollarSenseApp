import { SparklesCore } from '@/components/ui/sparkles';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <>
      <nav className="bg-background py-4 text-base text-center">
          <div className="flex flex-row justify-center items-center space-x-9">
            <Link to="/dashboard" className="text-foreground hover:text-primary active:text-primary">
              Login
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary active:text-primary">
              Register
            </Link>
          </div>
      </nav>
      <div className="flex flex-col h-screen items-center justify-center">
      
      <h1 className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-primary relative z-20">
        Dollar Sense
      </h1>
      <div className="w-full h-60 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-700 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-orange-700 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFA500"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(500px_200px_at_top,transparent_10%,#FFA500)]"></div>
      </div>
    </div>
    </>
    
  )
}

export default WelcomePage