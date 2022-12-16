import * as types from "./addressActionTypes";

const initialAddressData = {
  isAddressLoading: false,
  isAddressError: false,
  address: {},
};

const reducer = (oldState = initialAddressData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ADDRESS_REQUEST:
      return {
        ...oldState,
        isAddressLoading: true,
        address: {},
        isAddressError: false,
      };
    case types.GET_ADDRESS_SUCCESS:
      return {
        ...oldState,
        isAddressLoading: false,
        address: payload,
        isAddressError: false,
      };
    case types.GET_ADDRESS_FAILURE:
      return {
        ...oldState,
        isAddressLoading: false,
        isAddressError: true,
        address: {},
      };
    default:
      return oldState;
  }
};
export { reducer };
