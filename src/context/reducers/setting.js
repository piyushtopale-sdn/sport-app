const initialState = {
  settings: {},
  paymentKey: '',
  chartData: [],
  awaKeys: {}
}

export const setting = (state = initialState, action) => {
  switch (action.type) {
    case "SETTINGS":
      return { ...state, settings: action.data };
    case "CHART_DATA":
      return { ...state, chartData: action.data };
    case "OWNER_PAYMENT_KEY":
      return { ...state, paymentKey: action.data };
    case "AWA_KEYS":
      return { ...state, awaKeys: action.data };
    default:
      return state;
  }
};
