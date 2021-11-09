import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <div className="homeTextContainer">
        <div className="subMainTitle">BEST ONLINE STORE OF THE YEAR</div>
        <div className="mainTitle">We don't do fashion, we are fashion</div>
        <Link to="/Productpage">
          <button className="mainShopButton">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
