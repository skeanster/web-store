import { state } from '../state/Cartstate';
import Navbar from './Navbar';
import Footer from './Footer';

const CartPage = () => {
  return (
    <div className="cartPage">
      <Navbar />
      {state.map((item) => {
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
