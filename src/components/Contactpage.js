import Navbar from './Navbar';
import Footer from './Footer';
import Wavesvg from './Wavesvg';

const Contactpage = (props) => {
  const { cartTotal } = props;

  return (
    <div>
      <Navbar cartTotal={cartTotal} />
      <div className="contactPage">
        <div className="contactContainer">
          <div className="iconsContainer">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/skeanster"
              className="contactIcon"
              id="github"
            >
              <img
                id="github"
                alt="github icon"
                src="https://img.icons8.com/nolan/64/github.png"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/skeanster"
              className="contactIcon"
              id="facebook"
            >
              <img
                id="facebook"
                alt="facebook icon"
                src="https://img.icons8.com/nolan/64/facebook-new.png"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/skeanster"
              className="contactIcon"
              id="twitter"
            >
              <img
                id="twitter"
                alt="twiter icon"
                src="https://img.icons8.com/nolan/64/twitter-circled.png"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/skeanster"
              className="contactIcon"
              id="instagram"
            >
              <img
                id="instagram"
                alt="instagram icon"
                src="https://img.icons8.com/nolan/64/instagram-new.png"
              />
            </a>
          </div>
          <div className="contactTextContainer">
            <div className="contactTextLogo">FakeStore</div>
            <div className="contactTextAddress">
              2 Hacker Way, Menlo Park USA
            </div>
          </div>
        </div>
      </div>
      <Wavesvg />
      <Footer />
    </div>
  );
};

export default Contactpage;
