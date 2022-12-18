"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putReducer = exports.postReducer = exports.reomveReducer = exports.cartReducer = void 0;

var _cart = require("./cart.actionType");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Note: Do not update/change the initial state
var cartInitalState = {
  loading: false,
  error: false,
  data: [],
  price: 0
};
var cartInitalState2 = {
  loading2: false,
  error2: false,
  data2: [],
  price2: 0
};
var cartInitalState3 = {
  loading3: false,
  error3: false,
  data3: [],
  price3: 0
};
var cartInitalState4 = {
  loading4: false,
  error4: false,
  data4: [],
  price4: 0
};
var cartInitalState5 = {
  loading5: false,
  error5: false,
  data4: [],
  price5: 0
};

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cartInitalState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _cart.GET_CART_ITEMS_SUCCESS:
      {
        return _objectSpread({}, state, {
          data: payload,
          loading: false,
          error: false
        });
      }

    case _cart.SETPRICE:
      {
        return _objectSpread({}, state, {
          loading: false,
          error: false,
          price: payload
        });
      }

    case _cart.GET_CART_ITEMS_LOADING:
      {
        return _objectSpread({}, state, {
          loading: true,
          error: false
        });
      }

    case _cart.GET_CART_ITEMS_ERROR:
      {
        return _objectSpread({}, state, {
          loading: false,
          error: true
        });
      }

    case _cart.COUNTER_UPDATEINC:
      {
        var id = payload;
        var upQTY = state.data.map(function (el) {
          if (el.id === id) {
            return _objectSpread({}, el, {
              qty: el.qty + 1
            });
          } else {
            return el;
          }
        });
        return _objectSpread({}, state, {
          data: upQTY
        });
      }

    case _cart.COUNTER_UPDATEDEC:
      {
        var _id = payload;

        var _upQTY = state.data.map(function (el) {
          if (el.id === _id) {
            return _objectSpread({}, el, {
              qty: el.qty - 1
            });
          } else {
            return el;
          }
        });

        return _objectSpread({}, state, {
          data: _upQTY
        });
      }

    default:
      {
        return state;
      }
  }
};

exports.cartReducer = cartReducer;

var reomveReducer = function reomveReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cartInitalState2;

  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref2.type,
      paylaod = _ref2.paylaod;

  switch (type) {
    case _cart.REMOVE_CART_ITEMS_SUCCESS:
      {
        return _objectSpread({}, state, {
          loading2: false,
          error2: false
        });
      }

    case _cart.REMOVE_CART_ITEMS_ERROR:
      {
        return _objectSpread({}, state, {
          loading2: false,
          error2: true
        });
      }

    case _cart.REMOVE_CART_ITEMS_LOADING:
      {
        return _objectSpread({}, state, {
          loading2: true,
          error2: false
        });
      }

    default:
      {
        return state;
      }
  }
};

exports.reomveReducer = reomveReducer;

var postReducer = function postReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cartInitalState3;

  var _ref3 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref3.type,
      payload = _ref3.payload;

  switch (type) {
    case _cart.ADD_ITEM_TO_CART_SUCCESS:
      {
        return _objectSpread({}, state, {
          data3: payload,
          loading3: false,
          error3: false
        });
      }

    case _cart.ADD_ITEM_TO_CART_LOADING:
      {
        return _objectSpread({}, state, {
          loading3: true,
          error3: false
        });
      }

    case _cart.ADD_ITEM_TO_CART_ERROR:
      {
        return _objectSpread({}, state, {
          loading3: false,
          error3: true
        });
      }

    default:
      {
        return state;
      }
  }
};

exports.postReducer = postReducer;

var putReducer = function putReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cartInitalState4;

  var _ref4 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref4.type,
      payload = _ref4.payload;

  switch (type) {
    case _cart.UPDATE_CART_ITEMS_SUCCESS:
      {
        return _objectSpread({}, state, {
          loading4: false,
          error4: false
        });
      }

    case _cart.UPDATE_CART_ITEMS_LOADING:
      {
        return _objectSpread({}, state, {
          loading4: false,
          error4: false
        });
      }

    case _cart.UPDATE_CART_ITEMS_ERROR:
      {
        return _objectSpread({}, state, {
          loading4: false,
          error4: true
        });
      }

    default:
      {
        return state;
      }
  }
};

exports.putReducer = putReducer;
//# sourceMappingURL=cart.Reducer.dev.js.map
