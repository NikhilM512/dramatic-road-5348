import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
 
  
  export const store = legacy_createStore(
    compose(applyMiddleware(thunk))
  );
  