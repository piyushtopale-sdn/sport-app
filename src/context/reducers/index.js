/*********** Reduceres defined here *********/

import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage"; // default: localStorage if web, AsyncStorage if react-native
import encryptor from "./encryptor";
import { user } from "./user";
import { wallet } from "./wallet";
import { setting } from "./setting";
import { cart } from "./cart";
import { payment } from "./payment";
import { nft } from "./nft";
import { collection } from "./collection";
const userPersistConfig = {
    key: "front-end-app",
    storage: storage,
    transforms: [encryptor],
    blacklist: ["router", "loader"],
};

export default persistCombineReducers(userPersistConfig, {
    user,
    wallet,
    setting,
    cart,
    payment,
    nft,
    collection,
});
