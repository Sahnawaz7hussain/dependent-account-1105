import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducer as cartReducer } from "./CartReducer/cartReducer";
import { reducer as addressReducer } from "./AddressReducer/addressReducer";
import { reducer as authReducer } from "./AuthReducer/AuthReducer";
import { productReducer } from "./ProductReducer/ProductReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  cartReducer,
  addressReducer,
  authReducer,
  productReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
