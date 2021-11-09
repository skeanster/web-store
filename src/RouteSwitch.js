import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Productpage from './components/Productpage';
import Contactpage from './components/Contactpage';
import CartPage from './components/CartPage';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/web-store" element={<App />} />
        <Route path="/web-store/Productpage" element={<Productpage />} />
        <Route path="/web-store/Contactpage" element={<Contactpage />} />
        <Route path="/web-store/CartPage" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
