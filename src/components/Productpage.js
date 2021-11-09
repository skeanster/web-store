import Navbar from './Navbar';
import Footer from './Footer';
import cartChange from '../state/Cartstate';

const Productpage = () => {
  const addToCart = (e) => {
    cartChange(e.target.id, 'addToCart');
  };

  return (
    <div>
      <Navbar />
      <div className="productPage">Product page</div>
      <button onClick={addToCart} id="lime">
        Add lime
      </button>
      <button onClick={addToCart} id="lemon">
        Add lemon
      </button>
      <Footer />
    </div>
  );
};

export default Productpage;
