import Navbar from './Navbar';
import Footer from './Footer';

const CartPage = (props) => {
  const { cartTotal, productsList } = props;

  return (
    <div className="cartPage">
      <Navbar cartTotal={cartTotal} />
      {productsList.map((item) => {
        return (
          <div key={item.name}>
            {item.name}, quantity: {item.quantity}
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default CartPage;
