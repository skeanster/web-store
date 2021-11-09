let state = [];

const isInCart = (product) => {
  return state.find(({ name }) => name === product);
};

const cartAdd = (product) => {
  if (isInCart(product) === undefined) {
    state.push({ name: product, quantity: 1 });
    console.log(state);
  } else {
    state.find(({ name }) => name === product).quantity =
      state.find(({ name }) => name === product).quantity + 1;
    console.log(state);
  }
};

export { cartAdd, state };
