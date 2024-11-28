import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="Header">
        <Link to="/">
          <img src="/assets/amazon-logo-s3f.png" alt="pic" class = "headerimage"></img>
        </Link>
      </div>
    </header>
  )
}

export default Navbar