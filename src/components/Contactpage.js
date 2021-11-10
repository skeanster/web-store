import Navbar from './Navbar';
import Footer from './Footer';

const Contactpage = (props) => {
  const { cartTotal } = props;

  return (
    <div>
      <Navbar cartTotal={cartTotal} />
      <div>contact page</div>
      <Footer />
    </div>
  );
};

export default Contactpage;
