import Navbar from './Navbar';
import Footer from './Footer';

const CartPage = (props) => {
  const { cartTotal, productsList } = props;

  return (
    <div className="cartPage">
      <Navbar cartTotal={cartTotal} />
      <div className="cartContainer">
        <div className="cartCheckout">
          <div className="cartCompleteCost"></div>
        </div>
        {productsList.map((item) => {
          return (
            <div className="cartItemContainer" key={item.name}>
              <div className="cartPhoto">photo</div>
              <div className="cartDataContainer">
                <div className="cartName">{item.name}</div>
                <div className="cartQuantity">Quantity{item.quantity}</div>
                <div className="cartCost">Price Per: ${item.cost}</div>
                <div className="cartCostTotal">
                  total cost: ${item.quantity * item.cost}
                </div>
                <div className="itemChangeButtons">
                  <div className="addButton">+</div>
                  <div className="minusButton">-</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
