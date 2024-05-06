const initialState = {
  cartItems: 1,
  resaleItem: false
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case "CART_ITEMS":
      return { ...state, cartItems: action.data };
    case "RESALE_CART_ITEMS":
      return { ...state, resaleItem: action.data };
    default:
      return state;
  }
};
