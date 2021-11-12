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
              <img
                id="cartIcon"
                alt="cartIcon"
                src="https://img.icons8.com/nolan/64/favorite-cart.png"
              />
              <div className="itemsCounter">{cartTotal}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
