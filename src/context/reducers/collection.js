const initialState = {
    collectionId: null,
    categoryId: null,
    nftId: null,
    collectionDetails: null,
};
/*
 * collection list state update.
 */
export const collection = (state = initialState, action) => {
    switch (action.type) {
        case "COLLECTION_ID":
            return { ...state, collectionId: action.data };
        case "COLLECTION_DETAILS":
            return { ...state, collectionDetails: action.data };
        case "CATEGORY_ID":
            return { ...state, categoryId: action.data };
        case "NFT_ID":
            return { ...state, nftId: action.data };
        default:
            return state;
    }
};
