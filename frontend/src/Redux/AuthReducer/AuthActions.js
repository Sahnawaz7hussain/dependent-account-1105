import * as types from "./AuthActionTypes";
import axios from "axios";
import { removeFromLocalStorage } from "../../utils/useLocalData";
const auth_url = "auth_url";

const userSignupActionFn = (creds) => (dispatch) => {
  dispatch({ type: types.USER_SIGNUP_REQUEST });
  return axios
    .post(`${auth_url}/signup`, creds)
    .then((res) => {
      return dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.USER_SIGNUP_FAILURE, payload: err });
    });
};

const userLoginActionFn = (creds) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post(`${auth_url}/login`, creds)
    .then((res) => {
      return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
    });
};

const userLogoutActionFn = () => {
  removeFromLocalStorage("userToken");
  return { msg: "Logout Success" };
};

export { userSignupActionFn, userLoginActionFn, userLogoutActionFn };
