import Navbar from './Navbar';
import Footer from './Footer';
import { cartAdd } from '../state/Cartstate';
import Products from '../state/Productsstate';

const Productpage = () => {
  const addToCart = (e) => {
    cartAdd(e.target.id);
  };

  return (
    <div>
      <Navbar />
      <div className="productPage">
        {Products.map((item) => {
          return (
            <div className="item" key={item.sku}>
              <div className="itemPhoto">Photo</div>
              <div className="itemText">
                <div className="itemName">{item.name}</div>
                <div className="itemPrice">${item.price}.00</div>
                <button onClick={addToCart} id={item.name}>
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Productpage;
