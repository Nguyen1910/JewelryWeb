export const buyProduct = (product) => {
  return {
    type: "BUY_PRODUCT",
    payload: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: "DELETE_PRODUCT",
    payload: product,
  };
};

export const updateCart = (cart) => {
  return {
    type: "UPDATE_CART",
    payload: cart,
  };
};

export const deleteCart = () => {
  return {
    type: "DELETE_CART",
    payload: [],
  };
};
