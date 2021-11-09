import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">LOGO</div>
      <div className="navItemsContainer">
        <Link to="/">
          <div className="navItems" id="home">
            Home
          </div>
        </Link>
        <Link to="/Productpage">
          <div className="navItems" id="products">
            Products
          </div>
        </Link>
        <Link to="/Contactpage">
          <div className="navItems" id="contact">
            Contact
          </div>
        </Link>
        <Link to="/CartPage">
          <div className="navItems" id="cart">
            Cart
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
