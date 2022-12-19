import {
  getLocalStorageData,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/useLocalData";
import * as types from "./AuthActionTypes";

let userToken = getLocalStorageData("JWTTOKEN");
const isAuth = userToken ? true : false;
//console.log("userTokan");
const initAuthData = {
  isAuth: isAuth,
  isAuthLoading: false,
  isAuthError: false,
  authData: userToken || {},
  authErr: {},
};
const reducer = (oldState = initAuthData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_SIGNUP_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
        isAuthError: false,
        authData: {},
        authErr: {},
        isAuth: false,
      };
    case types.USER_SIGNUP_SUCCESS:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: false,
        authData: payload,
        authErr: {},
        isAuth: false,
      };
    case types.USER_SIGNUP_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: true,
        authData: {},
        authErr: payload,
        isAuth: false,
      };
    case types.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
        isAuthError: false,
        authData: {},
        authErr: {},
        isAuth: false,
      };
    case types.USER_LOGIN_SUCCESS:
      saveToLocalStorage("JWTTOKEN", payload.token);
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: false,
        authData: payload.token,
        isAuth: true,
        authErr: {},
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: true,
        authData: {},
        authErr: payload,
        isAuth: false,
      };
    case types.USER_LOGOUT_REQUEST:
      removeFromLocalStorage("JWTTOKEN");
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: false,
        isAuth: false,
        authData: {},
      };
    default:
      return oldState;
  }
};
export { reducer };
