import * as types from "./cartActionsType";
import axios from "axios";
let base_url = "hello world";

const getCartItemsActionFn = () => (dispatch) => {
  dispatch({ type: types.GET_CART_ITEMS_REQUEST });
  return axios
    .get(`${url}`)
    .then((res) => {
      return dispatch({
        type: types.GET_CART_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CART_ITEMS_FAILURE, payload: err });
    });
};
const updateCartItemsActionFn = (id, data) => (dispatch) => {
  dispatch({ type: types.UPDATE_CART_ITEMS_REQUEST });
  return axios
    .patch(`${base_url}/${id}`, data)
    .then((res) => {
      return dispatch({
        type: types.UPDATE_CART_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_CART_ITEMS_FAILURE, payload: err });
    });
};
const deleteCartItemsActionFn = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CART_ITEMS_REQUEST });
  return axios
    .delete(`${base_url}/${id}`)
    .then((res) => {
      return dispatch({
        type: types.DELETE_CART_ITEMS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_CART_ITEMS_FAILURE, payload: err });
    });
};

export {
  getCartItemsActionFn,
  updateCartItemsActionFn,
  deleteCartItemsActionFn,
};
