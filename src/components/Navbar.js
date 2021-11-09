import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">LOGO</div>
      <div className="navItemsContainer">
        <Link to="/web-store">
          <div className="navItems" id="home">
            Home
          </div>
        </Link>
        <Link to="/web-store/Productpage">
          <div className="navItems" id="products">
            Products
          </div>
        </Link>
        <Link to="/web-store/Contactpage">
          <div className="navItems" id="contact">
            Contact
          </div>
        </Link>
        <Link to="/web-store/CartPage">
          <div className="navItems" id="cart">
            Cart
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
