import * as types from "./cartActionsType";

const initialCartData = {
  isCartLoading: false,
  isCartError: false,
  cartItems: [],
};

const reducer = (oldState = initialCartData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CART_ITEMS_REQUEST:
      return {
        ...oldState,
        isCartLoading: true,
        isCartError: false,
        cartItems: [],
      };
    case types.GET_CART_ITEMS_SUCCESS:
      return {
        ...oldState,
        isCartLoading: false,
        cartItems: payload,
        isCartError: false,
      };
    case types.GET_CART_ITEMS_FAILURE:
      return {
        ...oldState,
        isCartLoading: false,
        isCartError: true,
        cartItems: [],
      };
    default:
      return oldState;
  }
};
export { reducer };
