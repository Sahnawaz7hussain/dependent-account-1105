import * as types from "./AuthActionTypes";
const initAuthData = {
  isAuthLoading: false,
  isAuthError: false,
  authData: {},
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
      };
    case types.USER_SIGNUP_SUCCESS:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: false,
        authData: payload,
        authErr: {},
      };
    case types.USER_SIGNUP_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: true,
        authData: {},
        authErr: payload,
      };
    case types.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
        isAuthError: false,
        authData: {},
        authErr: {},
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: false,
        authData: payload,
        authErr: {},
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: true,
        authData: {},
        authErr: payload,
      };
    default:
      return oldState;
  }
};
export { reducer };
