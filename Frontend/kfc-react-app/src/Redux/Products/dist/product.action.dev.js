"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchProductData = void 0;

var fetchProductData = function fetchProductData(url, dispatch, type) {
  // console.log(type,url,dispatch)
  // console.log(url,type)
  dispatch({
    type: "LOADING"
  });
  fetch(url).then(function (res) {
    console.log(res);
    return res.json();
  }).then(function (res) {
    // console.log(res)
    var payload = res;
    dispatch({
      type: type,
      payload: payload
    });
  })["catch"](function (err) {
    var payload = err;
    dispatch({
      type: "ERROR",
      payload: payload
    });
  })["finally"](function () {
    dispatch({
      type: "STOPLOADING"
    });
  });
};

exports.fetchProductData = fetchProductData;
//# sourceMappingURL=product.action.dev.js.map
