import Navbar from './Navbar';
import Footer from './Footer';
import Products from '../data/ProductData';

const Productpage = (props) => {
  const { cartTotal, cartAdd } = props;

  return (
    <div>
      <Navbar cartTotal={cartTotal} />
      <div className="productPage">
        {Products.map((item) => {
          return (
            <div className="item" key={item.sku}>
              <div className="itemPhoto">Photo</div>
              <div className="itemText">
                <div className="itemName">{item.name}</div>
                <div className="itemPrice">${item.price}.00</div>
                <button
                  onClick={cartAdd}
                  className="addItemButton"
                  data-name={item.name}
                  data-price={item.price}
                >
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
