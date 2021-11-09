import React, { useState, useEffect } from 'react';

const Productsstate = () => {
  const [Productsstate, setProductsstate] = useState({
    products: [
      { sku: '111', price: '5', name: 'lemons' },
      { sku: '222', price: '10', name: 'limes' },
      { sku: '333', price: '15', name: 'oranges' },
      { sku: '444', price: '20', name: 'grapfruits' },
    ],
  });

  useEffect(() => {}, [Productsstate]);

  return { Productsstate };
};

export default Productsstate;
