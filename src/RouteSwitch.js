import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Productpage from './components/Productpage';
import Contactpage from './components/Contactpage';
import CartPage from './components/CartPage';

const RouteSwitch = () => {
  const [cartState, setcartState] = useState([
    { products: [] },
    { totalItems: 0 },
    { totalCost: 0 },
  ]);

  const isInCart = (product) => {
    return cartState[0].products.find(({ name }) => name === product);
  };

  const cartAdd = (item) => {
    if (isInCart(item.target.name) === undefined) {
      setcartState([
        {
          products: cartState[0].products.concat({
            name: item.target.name,
            quantity: 1,
            cost: item.target.price,
          }),
        },
        { totalItems: cartState[1].totalItems + 1 },
        { totalCost: 0 },
      ]);
    } else {
      let itemExist = cartState[0].products.find(
        ({ name }) => name === item.target.name
      );
      let indexOfItem = cartState[0].products.indexOf(itemExist);
      let tempArray = [...cartState[0].products];
      let tempItem = { ...tempArray[indexOfItem] };
      tempItem.quantity = tempItem.quantity + 1;
      tempArray[indexOfItem] = tempItem;
      setcartState([
        {
          products: tempArray,
        },
        { totalItems: cartState[1].totalItems + 1 },
        { totalCost: 0 },
      ]);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {console.log(cartState)}
        <Route
          path="/web-store"
          element={<App cartTotal={cartState[1].totalItems} />}
        />
        <Route
          path="/web-store/Productpage"
          element={
            <Productpage
              cartTotal={cartState[1].totalItems}
              cartAdd={cartAdd}
            />
          }
        />
        <Route
          path="/web-store/Contactpage"
          element={<Contactpage cartTotal={cartState[1].totalItems} />}
        />
        <Route
          path="/web-store/CartPage"
          element={
            <CartPage
              cartTotal={cartState[1].totalItems}
              productsList={cartState[0].products}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
