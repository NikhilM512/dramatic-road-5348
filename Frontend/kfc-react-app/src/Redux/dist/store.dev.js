"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _product = require("./Products/product.reducer");

var _auth = require("./Auth/auth.reducer");

var _cart = require("./cartRedux/cart.Reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { authReducer } from "./Auth/auth.reducer";
var rootReducer = (0, _redux.combineReducers)({
  product: _product.productReducer,
  cart: _cart.cartReducer,
  auth: _auth.authReducer,
  otpVerify: _auth.OtpVerifier,
  signup: _auth.SignupReducer
});
var store = (0, _redux.legacy_createStore)(rootReducer, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk["default"])));
exports.store = store;
//# sourceMappingURL=store.dev.js.map
