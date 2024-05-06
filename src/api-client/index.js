/*
 * @file: index.js
 * @description: It Contain rest functions for api call .
 * @author: Nk
 */
import axios from "axios";
import querystring from "querystring";
import { setAuthorizationToken } from "../auth";
import { toast } from "react-toastify";
import { connect_wallet } from "../context/actions/wallet";
import { user_signout } from "../context/actions/user";

toast.configure();
let config = {
  headers: {
    "Content-Type": "application/json"
  }
};

let logoutErrFlag = false;
let langHeaders = () => {
  // dbname:window.location.href.split('/')[3]
  return { headers: { ...config.headers, "referrermodule": window.location.href } };

};

const logout = (error, dispatch) => {
  logoutErrFlag = true;
  toast.dismiss();
  if (dispatch && error.response.data && error.response.data.statusCode === 403) {
    dispatch(user_signout());
    dispatch({ type: "LOGOUT", data: {} });
    dispatch({ type: "LOGIN_SUCCESS", data: false });
    dispatch(connect_wallet(null));
    window.location.href = "/";
  }
}
class ApiClient {
  static post(url, params, token = null, dispatch = null) {
    if (token) setAuthorizationToken(axios, token);
    if (dispatch)
      dispatch({ type: "SORT", data: {} }); // reset previous sorting when post any new records
    return new Promise((fulfill, reject) => {
      axios.post(url, JSON.stringify(params), langHeaders())
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response) {
            fulfill(error.response.data);
            setTimeout(() => {
              logout(error, dispatch);
            }, 1000);
          } else {
            reject(error);
          }
        });
    });
  }

  static put(url, params, token = null, dispatch = null) {
    setAuthorizationToken(axios, token);

    return new Promise(function (fulfill, reject) {
      axios
        .put(url, JSON.stringify(params), langHeaders())
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response && !logoutErrFlag) {
            fulfill(error.response.data);
            setTimeout(() => {
              logout(error, dispatch);
            }, 1000);
          } else {
            reject(error);
          }
        });
    });
  }

  static get(url, params, token = null, dispatch = null) {
    setAuthorizationToken(axios, token);
    let query = querystring.stringify(params);
    url = query ? `${url}?${query}` : url;
    return new Promise(function (fulfill, reject) {
      axios
        .get(url, langHeaders())
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          // if (error && error.response && !logoutErrFlag) {
          if (error && error.response) {
            fulfill(error.response.data);
            setTimeout(() => {
              logout(error, dispatch);
            }, 1000);
          } else {
            reject(error);
          }
        });
    });
  }

  static delete(url, params, token = null, dispatch = null) {
    setAuthorizationToken(axios, token);
    return new Promise(function (fulfill, reject) {
      axios
        .delete(url, { data: params }, langHeaders())
        .then(function (response) {
          fulfill(response.data);
        })
        .catch(function (error) {
          if (error && error.response && !logoutErrFlag) {
            fulfill(error.response.data);
            setTimeout(() => {
              logout(error, dispatch);
            }, 1000);
          } else {
            reject(error);
          }
        });
    });
  }
}

export default ApiClient;
