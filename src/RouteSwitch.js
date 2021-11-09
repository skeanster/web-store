import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Productpage from './components/Productpage';
import Contactpage from './components/Contactpage';
import CartPage from './components/CartPage';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Productpage" element={<Productpage />} />
        <Route path="/Contactpage" element={<Contactpage />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
