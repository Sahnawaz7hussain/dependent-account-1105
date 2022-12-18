import * as types from "./ProductActionType";
import axios from "axios";
let base_url = process.env.REACT_APP_BASE_URL;
const getProductsActionFn = (payload) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
    .get(`${base_url}/product`, {
      params: {
        ...payload,
      },
    })
    .then((res) => {
      return dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err.message });
    });
};

export { getProductsActionFn };
