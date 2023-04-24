
import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./Products/product.reducer";
import { authReducer } from "./Auth/auth.reducer";
import { cartReducer } from "./Cart/cart.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
  cart: cartReducer
});

const createComposer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)));
