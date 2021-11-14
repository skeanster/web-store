import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Productpage from './components/Productpage';
import Contactpage from './components/Contactpage';
import CartPage from './components/CartPage';

const RouteSwitch = () => {
  const [cartState, setcartState] = useState({
    products: [],
    totalItems: 0,
    totalCost: 0,
  });

  const isInCart = (product) => {
    return cartState.products.find(({ name }) => name === product);
  };

  const cartAdd = (item) => {
    if (isInCart(item.target.dataset.name) === undefined) {
      setcartState({
        products: cartState.products.concat({
          name: item.target.dataset.name,
          quantity: 1,
          cost: item.target.dataset.price,
        }),

        totalItems: cartState.totalItems + 1,

        totalCost:
          cartState.totalCost +
          Math.round(
            (Number(item.target.dataset.price) + Number.EPSILON) * 100
          ) /
            100,
      });
    } else {
      let itemExist = cartState.products.find(
        ({ name }) => name === item.target.dataset.name
      );
      let indexOfItem = cartState.products.indexOf(itemExist);
      let tempArray = [...cartState.products];
      let tempItem = { ...tempArray[indexOfItem] };
      tempItem.quantity = tempItem.quantity + 1;
      tempArray[indexOfItem] = tempItem;
      setcartState({
        products: tempArray,

        totalItems: cartState.totalItems + 1,

        totalCost:
          cartState.totalCost +
          Math.round(
            (Number(item.target.dataset.price) + Number.EPSILON) * 100
          ) /
            100,
      });
    }
  };

  const cartRemove = (item) => {
    if (isInCart(item.target.dataset.name).quantity > 1) {
      let itemExist = cartState.products.find(
        ({ name }) => name === item.target.dataset.name
      );
      let indexOfItem = cartState.products.indexOf(itemExist);
      let tempArray = [...cartState.products];
      let tempItem = { ...tempArray[indexOfItem] };
      tempItem.quantity = tempItem.quantity - 1;
      tempArray[indexOfItem] = tempItem;
      setcartState({
        products: tempArray,

        totalItems: cartState.totalItems - 1,

        totalCost:
          cartState.totalCost -
          Math.round(
            (Number(item.target.dataset.price) + Number.EPSILON) * 100
          ) /
            100,
      });
    } else {
      setcartState({
        products: cartState.products.filter(
          (product) => product.name !== item.target.dataset.name
        ),

        totalItems: cartState.totalItems - 1,

        totalCost:
          cartState.totalCost -
          Math.round(
            (Number(item.target.dataset.price) + Number.EPSILON) * 100
          ) /
            100,
      });
    }
  };

  const checkoutCart = () => {
    if (cartState.totalItems === 0) {
      return;
    } else {
      alert('Thank you for shopping!');
      setcartState({ products: [], totalItems: 0, totalCost: 0 });
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/web-store"
          element={<App cartTotal={cartState.totalItems} />}
        />
        <Route
          path="/web-store/Productpage"
          element={
            <Productpage cartTotal={cartState.totalItems} cartAdd={cartAdd} />
          }
        />
        <Route
          path="/web-store/Contactpage"
          element={<Contactpage cartTotal={cartState.totalItems} />}
        />
        <Route
          path="/web-store/CartPage"
          element={
            <CartPage
              cartTotal={cartState.totalItems}
              productsList={cartState.products}
              totalPrice={cartState.totalCost}
              cartAdd={cartAdd}
              cartRemove={cartRemove}
              checkoutCart={checkoutCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
