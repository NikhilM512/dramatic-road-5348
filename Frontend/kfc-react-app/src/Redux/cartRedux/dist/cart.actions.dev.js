"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.priceSet = exports.updateDec = exports.updateInc = exports.updateQty = exports.deleteItem = exports.addToCart = exports.getcartItem = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _reactRedux = require("react-redux");

var _cart = require("./cart.actionType");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getcartItem = function getcartItem(dispatch) {
  var res;
  return regeneratorRuntime.async(function getcartItem$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dispatch({
            type: _cart.GET_CART_ITEMS_LOADING
          });
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_axios["default"].post("http://localhost:5000/cart/"));

        case 4:
          res = _context.sent;
          return _context.abrupt("return", dispatch({
            type: _cart.GET_CART_ITEMS_SUCCESS,
            payload: res.data
          }));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          dispatch({
            type: _cart.GET_CART_ITEMS_ERROR
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.getcartItem = getcartItem;

var addToCart = function addToCart(_ref) {
  var image = _ref.image,
      id = _ref.id,
      title = _ref.title,
      cata = _ref.cata,
      qty = _ref.qty,
      price = _ref.price;
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // console.log(image, id, title, price);
            dispatch({
              type: _cart.ADD_ITEM_TO_CART_LOADING
            });
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("http://localhost:5000/cart/add", {
              image: image,
              title: title,
              cata: cata,
              qty: qty,
              id: id,
              price: price
            }));

          case 4:
            res = _context2.sent;
            return _context2.abrupt("return", dispatch({
              type: _cart.ADD_ITEM_TO_CART_SUCCESS,
              payload: res.data
            }));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            dispatch({
              type: _cart.ADD_ITEM_TO_CART_ERROR
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.addToCart = addToCart;

var deleteItem = function deleteItem(id) {
  return function _callee2(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch({
              type: _cart.REMOVE_CART_ITEMS_LOADING
            });
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"]["delete"]("https://creepy-fawn-purse.cyclic.app/api/cart/"));

          case 4:
            res = _context3.sent;
            return _context3.abrupt("return", dispatch({
              type: _cart.REMOVE_CART_ITEMS_SUCCESS,
              payload: res.data
            }));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            dispatch({
              type: _cart.REMOVE_CART_ITEMS_ERROR
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.deleteItem = deleteItem;

var updateQty = function updateQty(_ref2) {
  var id = _ref2.id,
      image = _ref2.image,
      cata = _ref2.cata,
      title = _ref2.title,
      price = _ref2.price,
      qty = _ref2.qty;
  return function _callee3(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee3$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            dispatch({
              type: _cart.UPDATE_CART_ITEMS_LOADING
            });
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].put("https://creepy-fawn-purse.cyclic.app/api/cart/".concat(id), {
              id: id,
              qty: qty,
              image: image,
              cata: cata,
              title: title,
              price: price
            }));

          case 4:
            res = _context4.sent;
            return _context4.abrupt("return", dispatch({
              type: _cart.UPDATE_CART_ITEMS_SUCCESS,
              payload: res.data
            }));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            dispatch({
              type: _cart.UPDATE_CART_ITEMS_ERROR
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.updateQty = updateQty;

var updateInc = function updateInc(payload) {
  return {
    type: _cart.COUNTER_UPDATEINC,
    payload: payload
  };
};

exports.updateInc = updateInc;

var updateDec = function updateDec(payload) {
  return {
    type: _cart.COUNTER_UPDATEDEC,
    payload: payload
  };
};

exports.updateDec = updateDec;

var priceSet = function priceSet(payload) {
  return {
    type: _cart.SETPRICE,
    payload: payload
  };
};

exports.priceSet = priceSet;
//# sourceMappingURL=cart.actions.dev.js.map
