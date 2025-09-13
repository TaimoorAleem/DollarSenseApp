import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-background py-4 text-base">
      <div className="container px-0 flex items-center justify-between">
        <div className="flex items-center space-x-9">
          <Link to="/" className="text-primary hover:text-primary text-2xl active:text-primary">
            Dollar Sense
          </Link>
        </div>
        <div className="flex items-center space-x-9">
          <Link to="#" className="text-foreground hover:text-primary active:text-primary">
            About
          </Link>
          <Link to="#" className="text-foreground hover:text-primary active:text-primary">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar