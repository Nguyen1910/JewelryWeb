const initialState = { cartArr: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_PRODUCT":
      const productInCart = state.cartArr.find(
        (p) => p.id === action.payload.id
      );
      if (!productInCart) {
        return { cartArr: [...state.cartArr, action.payload] };
      } else {
        let newCart = state.cartArr;
        const objIndex = newCart.findIndex(
          (obj) => obj.id === action.payload.id
        );
        if (newCart[objIndex].quantity === undefined) {
          newCart[objIndex].quantity = 2;
        } else {
          newCart[objIndex].quantity = newCart[objIndex].quantity + 1;
        }
        return { cartArr: [...newCart] };
      }

    case "DELETE_PRODUCT":
      let newCart = state.cartArr;
      const objIndex = newCart.findIndex((obj) => obj.id === action.payload.id);
      newCart.splice(objIndex, 1);
      return { cartArr: [...newCart] };

    default:
      return state;
  }
};

export default cartReducer;
