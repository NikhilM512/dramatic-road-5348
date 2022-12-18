"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productReducer = void 0;

var _product = require("./product.actionTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  ALLPRODUCT_Data: [],
  EXCLUSIVE_DEAL_Data: [],
  CHICKEN_BUCKETS_Data: [],
  NEW_LAUNCH_Data: [],
  BIRYANI_BUCKETS_Data: [],
  BOX_MEALS_Data: [],
  BURGERS_DATA: [],
  STAY_HOME_SPECIALS_Data: [],
  SNACKS_Data: [],
  BEVERAGES_Data: [],
  isLoading: false,
  isError: false,
  errorMessage: ""
};

var productReducer = function productReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  // console.log(type)
  switch (type) {
    case _product.GET_ALLPRODUCT_DATA_SUCCESS:
      return _objectSpread({}, state, {
        ALLPRODUCT_Data: payload,
        isLoading: false
      });

    case _product.GET_EXCLUSIVE_DEAL_DATA_SUCCESS:
      return _objectSpread({}, state, {
        EXCLUSIVE_DEAL_Data: payload,
        isLoading: false
      });

    case _product.GET_CHICKEN_BUCKETS_DATA_SUCCESS:
      return _objectSpread({}, state, {
        CHICKEN_BUCKETS_Data: payload,
        isLoading: false
      });

    case _product.GET_NEW_LAUNCH_DATA_SUCCESS:
      return _objectSpread({}, state, {
        NEW_LAUNCH_Data: payload,
        isLoading: false
      });

    case _product.GET_BIRYANI_BUCKETS_DATA_SUCCESS:
      return _objectSpread({}, state, {
        BIRYANI_BUCKETS_Data: payload,
        isLoading: false
      });

    case _product.GET_BOX_MEALS_DATA_SUCCESS:
      return _objectSpread({}, state, {
        BOX_MEALS_Data: payload,
        isLoading: false
      });

    case _product.GET_BURGERS_DATA_SUCCESS:
      return _objectSpread({}, state, {
        BURGERS_Data: payload,
        isLoading: false
      });

    case _product.GET_STAY_HOME_SPECIALS_DATA_SUCCESS:
      return _objectSpread({}, state, {
        STAY_HOME_SPECIALS_Data: payload,
        isLoading: false
      });

    case _product.GET_SNACKS_DATA_SUCCESS:
      return _objectSpread({}, state, {
        SNACKS_Data: payload,
        isLoading: false
      });

    case _product.GET_BEVERAGES_DATA_SUCCESS:
      return _objectSpread({}, state, {
        BEVERAGES_Data: payload,
        isLoading: false
      });

    case "LOADING":
      return _objectSpread({}, state, {
        isLoading: true
      });

    case "LOADING":
      return _objectSpread({}, state, {
        isError: true,
        isLoading: false,
        errorMessage: payload
      });

    case "STOPLOADING":
      return _objectSpread({}, state, {
        isLoading: false
      });

    default:
      return state;
  }
};

exports.productReducer = productReducer;
//# sourceMappingURL=procucts.reducer.dev.js.map
