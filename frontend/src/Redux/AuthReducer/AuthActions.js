import * as types from "./AuthActionTypes";
import axios from "axios";
const auth_url = process.env.REACT_APP_BASE_URL;

const userSignupActionFn = (creds) => (dispatch) => {
  // console.log("cred: ", creds);
  dispatch({ type: types.USER_SIGNUP_REQUEST });
  return axios
    .post(`${auth_url}/user/signup`, {
      ...creds,
      name: creds.first_name + " " + creds.last_name,
    })
    .then((res) => {
      return dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({
        type: types.USER_SIGNUP_FAILURE,
        payload: err.message,
      });
    });
};

const userLoginActionFn = (creds) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post(`${auth_url}/user/login`, creds)
    .then((res) => {
      return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.USER_LOGIN_FAILURE, payload: err.message });
    });
};

const userLogoutActionFn = () => (dispatch) => {
  return dispatch({ type: types.USER_LOGOUT_REQUEST });
};

export { userSignupActionFn, userLoginActionFn, userLogoutActionFn };
