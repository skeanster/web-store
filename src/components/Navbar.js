import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { cartTotal } = props;

  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="logo">FakeStore</div>
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
              Cart:<div className="itemsCounter">{cartTotal}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
