const initialState = {
    user: false,
    isLoading: false,
    orderDetails: false,
    nftOrderDetails: false,
    country: [],
    card: false,
    token: null,
    isBrowserClose: false
};
/*
 * user list state update.
 */
export const user = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { ...state, user: action.data, token: action.data.token };
        case "ORDER_DETAILS":
            return { ...state, orderDetails: action.data };
        case "NFT_ORDER_DETAILS":
            return { ...state, nftOrderDetails: action.data };
        case "COUNTRY_CODE":
            return { ...state, country: action.data };
        case "CARD_DETAILS":
            return { ...state, card: action.data };
        case "ISLOADING":
            return { ...state, isLoading: action.data }
        case "ISBROWSERCLOSE":
            return { ...state, isBrowserClose: action.data }
        //return { ...state, isLoading: false };
        default:
            return state;
    }
};
