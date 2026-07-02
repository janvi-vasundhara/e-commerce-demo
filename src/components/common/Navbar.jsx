import { NavLink } from "react-router-dom"
import "../../styles/common/Navbar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__content">
        <NavLink to="/" className="navbar__link" end>
          Home
        </NavLink>
        <NavLink to="/products" className="navbar__link">
          Products
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
