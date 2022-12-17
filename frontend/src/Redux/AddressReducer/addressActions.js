import * as types from "./addressActionTypes";
import axios from "axios";
import headers from "../../utils/headers";

const address_url = process.env.REACT_APP_BASE_URL;

const getAddressActionFn = () => (dispatch) => {
  dispatch({ type: types.GET_ADDRESS_REQUEST });
  return axios
    .get(`${address_url}/address`, { headers })
    .then((res) => {
      return dispatch({ type: types.GET_ADDRESS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_ADDRESS_FAILURE,
        payload: err.message,
      });
    });
};

const postAddressActionFn = (data) => (dispatch) => {
  dispatch({ type: types.POST_ADDRESS_REQUEST });
  return axios
    .post(`${address_url}/address`, data, { headers })
    .then((res) => {
      // console.log("address action file res", res);
      return dispatch({ type: types.POST_ADDRESS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({
        type: types.POST_ADDRESS_FAILURE,
        payload: err.message,
      });
    });
};

const updateAddressActionFn = (data) => (dispatch) => {
  dispatch({ type: types.UPDATE_ADDRESS_REQUEST });
  return axios
    .patch(`${address_url}/address`, data, { headers })
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
