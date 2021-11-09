import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
