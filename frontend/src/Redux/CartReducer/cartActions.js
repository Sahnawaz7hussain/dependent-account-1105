import * as types from "./cartActionsType";
import axios from "axios";
let base_url = process.env.REACT_APP_BASE_URL;

const getCartItemsActionFn = (headers) => (dispatch) => {
  // console.log("action header:", headers);
  dispatch({ type: types.GET_CART_ITEMS_REQUEST });
  return axios
    .get(`${base_url}/cart`, { headers })
    .then((res) => {
      return dispatch({
        type: types.GET_CART_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CART_ITEMS_FAILURE, payload: err.message });
    });
};

const postCartItmeActionFn = (data, headers) => (dispatch) => {
  console.log("cart action data,", data, headers);
  dispatch({ type: types.POST_CART_ITEMS_REQUEST });
  return axios
    .post(`${base_url}/cart`, data, { headers })
    .then((res) => {
      return dispatch({
        type: types.POST_CART_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: types.POST_CART_ITEMS_FAILURE, payload: err.message })
    );
};
const updateCartItemsActionFn = (id, data) => (dispatch) => {
  dispatch({ type: types.UPDATE_CART_ITEMS_REQUEST });
  return axios
    .patch(`${base_url}/cart/${id}`, data)
    .then((res) => {
      return dispatch({
        type: types.UPDATE_CART_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_CART_ITEMS_FAILURE, payload: err.message });
    });
};
const deleteCartItemsActionFn = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CART_ITEMS_REQUEST });
  return axios
    .delete(`${base_url}/cart/${id}`)
    .then((res) => {
      return dispatch({
        type: types.DELETE_CART_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_CART_ITEMS_FAILURE, payload: err.message });
    });
};

export {
  getCartItemsActionFn,
  updateCartItemsActionFn,
  deleteCartItemsActionFn,
  postCartItmeActionFn,
};
