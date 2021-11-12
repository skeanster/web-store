import Navbar from './Navbar';
import Footer from './Footer';

const CartPage = (props) => {
  const { cartTotal, productsList, totalPrice, cartAdd } = props;

  return (
    <div className="cartPage">
      <Navbar cartTotal={cartTotal} />
      <div className="cartContainer">
        <div className="cartCheckout">
          <div className="cartCompleteCost">Total: ${totalPrice}</div>
          <div className="checkoutButton">Checkout</div>
        </div>
        {productsList.map((item) => {
          return (
            <div className="cartItemContainer" key={item.name}>
              <div className="cartPhoto" id={'photo' + item.name}></div>
              <div className="cartDataContainer">
                <div className="cartName">{item.name}</div>
                <div className="cartQuantity">Quantity: {item.quantity}</div>
                <div className="cartCost">Price Per: ${item.cost}</div>
                <div className="cartCostTotal">
                  total cost: ${item.quantity * item.cost}
                </div>
                <div className="itemChangeButtons">
                  <img
                    onClick={cartAdd}
                    data-name={item.name}
                    data-price={item.cost}
                    className="addButton"
                    alt="add button"
                    src="https://img.icons8.com/nolan/64/add.png"
                  />
                  <img
                    className="minusButton"
                    alt="minus button"
                    src="https://img.icons8.com/nolan/64/minus.png"
                  />
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
