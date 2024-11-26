import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="Header">
        <Link to="/">
          <h1>Amazon</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar