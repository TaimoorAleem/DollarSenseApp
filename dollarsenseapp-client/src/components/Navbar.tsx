import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-background py-4 text-base">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-primary text-foreground font-bold">Dollar Sense</p>
        </div>
        <div className="flex items-center space-x-9">
          <Link to="/about" className="text-foreground hover:text-primary ">
            About
          </Link>
          <Link to="/profile" className="text-foreground hover:text-primary">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar