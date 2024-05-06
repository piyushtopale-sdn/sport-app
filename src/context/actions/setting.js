import ApiClient from "../../api-client";
import { apiUrl, API_URL, PORT } from "../../environment";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export const get_settings = (params) => {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    ApiClient.get(`${API_URL}settings/v1/settings/getFrontendSettings`, params, token, dispatch).then((response) => {
      if (response.statusCode === 200) {
        dispatch({ type: "SETTINGS", data: response.data });
      } else if (response.statusCode === 404) {
        // toast.warn(response.message);
      } else {
        // toast.error(response.message);
      }
    });
  }
};

export const getAWA = (params) => {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    ApiClient.get(`${API_URL}category/v1/category/getAWA`, params, token, dispatch).then((response) => {
      if (response.statusCode === 200) {
        dispatch({ type: "AWA_KEYS", data: response.data });
      } else if (response.statusCode === 404) {
        // toast.warn(response.message);
      } else {
        // toast.error(response.message);
      }
    });
  }
};

