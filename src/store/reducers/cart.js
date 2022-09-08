const initialState = {
  cartArr: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_PRODUCT":
      const productInCart = state.cartArr.find(
        (p) => p.id === action.payload.id
      );
      if (!productInCart) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.cartArr, action.payload])
        );
        return { ...state, cartArr: [...state.cartArr, action.payload] };
      } else {
        let newCart = [...state.cartArr];
        const objIndex = newCart.findIndex(
          (obj) => obj.id === action.payload.id
        );
        newCart[objIndex].quantity =
          parseInt(newCart[objIndex].quantity) +
          parseInt(action.payload.quantity);
        localStorage.setItem("cart", JSON.stringify([...newCart]));
        return { ...state, cartArr: [...newCart] };
      }

    case "DELETE_PRODUCT":
      let newCart = state.cartArr;
      const objIndex = newCart.findIndex((obj) => obj.id === action.payload.id);
      newCart.splice(objIndex, 1);
      localStorage.setItem("cart", JSON.stringify([...newCart]));
      return { ...state, cartArr: [...newCart] };

    case "DELETE_CART":
      localStorage.removeItem("cart");
      return { ...state, cartArr: [] };

    case "UPDATE_CART":
      let cart = [...state.cartArr];
      localStorage.setItem("cart", JSON.stringify([...newCart]));
      return { ...state, cartArr: [...cart] };

    default:
      return state;
  }
};

export default cartReducer;
