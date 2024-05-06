const initialState = {
  records: []
}

export const payment = (state = initialState, action) => {
  switch (action.type) {
    case "PURCHASE_ITEM":
      return { ...state, records: action.data };
    default:
      return state;
  }
};
