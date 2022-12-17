"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _redux.legacy_createStore)((0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk["default"])));
exports.store = store;
//# sourceMappingURL=store.dev.js.map
