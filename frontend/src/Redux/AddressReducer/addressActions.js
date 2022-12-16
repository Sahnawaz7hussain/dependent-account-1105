import * as types from "./addressActionTypes";
import axios from "axios";

const address_url = "address_url";

const getAddressActionFn = () => (dispatch) => {
  dispatch({ type: types.GET_ADDRESS_REQUEST });
  return axios
    .get(`${address_url}`)
    .then((res) => {
      return dispatch({ type: types.GET_ADDRESS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_ADDRESS_FAILURE, payload: err });
    });
};
const postAddressActionFn = (data) => (dispatch) => {
  dispatch({ type: types.POST_ADDRESS_REQUEST });
  return axios
    .post(`${address_url}/post`, data)
    .then((res) => {
      return dispatch({ type: types.POST_ADDRESS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.POST_ADDRESS_FAILURE, payload: err });
    });
};

const updateAddressActionFn = (id, data) => (dispatch) => {
  dispatch({ type: types.UPDATE_ADDRESS_REQUEST });
  return axios
    .get(`${address_url}/${id}`, data)
    .then((res) => {
      return dispatch({
        type: types.UPDATE_ADDRESS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_ADDRESS_FAILURE, payload: err });
    });
};

export { getAddressActionFn, updateAddressActionFn, postAddressActionFn };
