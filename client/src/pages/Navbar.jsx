import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Game/128">Play</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};


export default Navbar;