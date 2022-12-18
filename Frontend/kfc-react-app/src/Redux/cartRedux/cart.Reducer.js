import {
    ADD_ITEM_TO_CART_ERROR,
    ADD_ITEM_TO_CART_LOADING,
    ADD_ITEM_TO_CART_SUCCESS,
  
    COUNTER_UPDATEINC,
    COUNTER_UPDATEDEC,
  
    GET_CART_ITEMS_ERROR,
    GET_CART_ITEMS_LOADING,
    GET_CART_ITEMS_SUCCESS,
  
    REMOVE_CART_ITEMS_ERROR,
    REMOVE_CART_ITEMS_LOADING,
    REMOVE_CART_ITEMS_SUCCESS,
  
    UPDATE_CART_ITEMS_ERROR,
    UPDATE_CART_ITEMS_LOADING,
    UPDATE_CART_ITEMS_SUCCESS,
    SETPRICE,
  } from "./cart.actionType";
  
  // Note: Do not update/change the initial state
  const cartInitalState = {
    
    loading: false,
    error: false,
    data: [],
    price: 0, 
  };
  
  const cartInitalState2 = {
    loading2: false,
    error2: false,
    data2: [],
    price2: 0,
  };
  const cartInitalState3 = {
    
    loading3: false,
    error3: false,
    data3: [],
    price3: 0, 
  };
  const cartInitalState4 = {
    loading4: false,
    error4: false,
    data4: [],
    price4: 0,
  };
  
  const cartInitalState5 = {
    loading5: false,
    error5: false,
    data4: [],
    price5: 0,
  };
  
  export const cartReducer = (
    state = cartInitalState,
    { type, payload }
  ) => {
    switch (type) {
      case GET_CART_ITEMS_SUCCESS: {
        return {
          ...state,
          data: payload,
          loading: false,
          error: false,
        };
      }
  
      case SETPRICE: {
        return {
          ...state,
          loading: false,
          error: false,
          price: payload,
        };
      }
  
      case GET_CART_ITEMS_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
  
      case GET_CART_ITEMS_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case COUNTER_UPDATEINC: {
        const id = payload;
  
        const upQTY = state.data.map((el) => {
          if (el.id === id) {
            return {
              ...el,
              qty: el.qty + 1,
            };
          } else {
            return el;
          }
        });
  
        return {
          ...state,
          data: upQTY,
        };
      }
      case COUNTER_UPDATEDEC: {
        const id = payload;
  
        const upQTY = state.data.map((el) => {
          if (el.id === id) {
            return {
              ...el,
              qty: el.qty - 1,
            };
          } else {
            return el;
          }
        });
  
        return {
          ...state,
          data: upQTY,
        };
      }
  
      default: {
        return state;
      }
    }
  };
  
  
  export const reomveReducer=(state = cartInitalState2, { type, paylaod })=>{
    switch (type) {
      case REMOVE_CART_ITEMS_SUCCESS: {
        return {
          ...state,
          loading2: false,
          error2: false,
        };
      }
      case REMOVE_CART_ITEMS_ERROR: {
        return {
          ...state,
          loading2: false,
          error2: true,
        };
      }
      case REMOVE_CART_ITEMS_LOADING: {
        return {
          ...state,
          loading2: true,
          error2: false,
        };
      }
  
      default: {
        return state;
      }
    }
  
  }
  
  
  export const postReducer = (state = cartInitalState3, { type, payload }) => {
    switch (type) {
      case ADD_ITEM_TO_CART_SUCCESS: {
        return {
          ...state,
          data3: payload,
          loading3: false,
          error3: false,
        };
      }
      case ADD_ITEM_TO_CART_LOADING: {
        return {
          ...state,
          loading3: true,
          error3: false,
        };
      }
      case ADD_ITEM_TO_CART_ERROR: {
        return {
          ...state,
          loading3: false,
          error3: true,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export const putReducer = (state = cartInitalState4, { type, payload }) => {
    switch (type) {
      case UPDATE_CART_ITEMS_SUCCESS: {
        return {
          ...state,
          loading4: false,
          error4: false,
        };
      }
      case UPDATE_CART_ITEMS_LOADING: {
        return {
          ...state,
          loading4: false,
          error4: false,
        };
      }
      case UPDATE_CART_ITEMS_ERROR: {
        return {
          ...state,
          loading4: false,
          error4: true,
        };
      }
  
      default: {
        return state;
      }
    }
  };
