import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <div className="homeTextContainer">
        <div className="subMainTitle">Americas #4 Rated Online Store</div>
        <div className="mainTitle">Putting the F in Fashion</div>
        <Link to="/web-store/Productpage">
          <button className="mainShopButton">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
