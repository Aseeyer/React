import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">

        <Link to="/" className="logo">
          SHOP.CO
        </Link>

        <ul className="navLinks">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Shop</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>

        <div className="navActions">
          <input
            type="text"
            placeholder="Search products..."
            className="searchInput"
          />

          <Link to="/cart" className="cartBtn">
            🛒
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
