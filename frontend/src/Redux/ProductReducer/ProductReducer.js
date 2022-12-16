import * as types from "./ProductActionType";

const initialProductData = {
  isProductLoading: false,
  isProductError: false,
  product: [],
};

const productReducer = (oldState = initialProductData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...oldState,
        isProductLoading: true,
        isProductError:false,
        product: []
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...oldState,
        isProductLoading: false,
        product: payload,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...oldState,
        isProductLoading: false,
        isProductError: true,
        product: [],
      };
    default:
      return oldState;
  }
};
export { productReducer };
