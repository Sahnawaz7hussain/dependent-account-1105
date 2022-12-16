import * as types from "./ProductActionType";
import axios from "axios";
let base_url = "https://hilarious-kerchief-crab.cyclic.app/product";

const getProductsActionFn = (params={}) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
    .get(`${base_url}`,params)
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

export {getProductsActionFn}