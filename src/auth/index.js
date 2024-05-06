/*
 * @file: index.js
 * @description: Auth functions here
 * @date: 21.02.2022
 * @author: Nk
 * */

/******** Get User from store  ***********/
// export const User = store => {
//     return store.getState().user;
// };

// /******** Routing authentication middleware ***********/
// export const Auth = store => {
//     return User(store).loggedIn;
// };
/******** Set Authorization token in header ***********/
export const setAuthorizationToken = (axios, token) => {
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }
};
