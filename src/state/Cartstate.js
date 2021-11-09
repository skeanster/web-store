let initState = [{ sku: 'lime', quantity: 1 }];
const isInCart = (product) => {
  return initState.find(({ sku }) => sku === product);
};

const cartChange = (product, action) => {
  if (action === 'addToCart') {
    if (isInCart(product) === undefined) {
      initState.push({ sku: product, quantity: 1 });
      console.log(initState);
    } else {
      initState.find(({ sku }) => sku === product).quantity =
        initState.find(({ sku }) => sku === product).quantity + 1;
      console.log(initState);
    }
  }
};

export default cartChange;
