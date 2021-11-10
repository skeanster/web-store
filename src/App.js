import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Wavesvg from './components/Wavesvg';

const App = (props) => {
  const { cartTotal } = props;

  return (
    <div>
      <Navbar cartTotal={cartTotal} />
      <Homepage />
      <Footer />
      <Wavesvg />
    </div>
  );
};

export default App;
