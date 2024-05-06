import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export const set_cart_item = (params) => {
  return (dispatch) => {
    dispatch({ type: "CART_ITEMS", data: params });
  }
}

export const resale_item = (data) => {
  return (dispatch) => {
    dispatch({ type: "RESALE_CART_ITEMS", data: data });
  }
}