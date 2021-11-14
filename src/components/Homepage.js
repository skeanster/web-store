import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <div className="homeTextContainer">
        <div className="subMainTitle">
          "Just a solid online store, 9.2/10" -IGN
        </div>
        <div className="mainTitle">Putting the F in Fashion</div>
        <Link to="/web-store/Productpage">
          <button className="mainShopButton">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
