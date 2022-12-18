import axios from "axios";
import { useSelector } from "react-redux"; 
import {
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_ERROR,
  // COUNTER_UPDATE,
  COUNTER_UPDATEINC,
  COUNTER_UPDATEDEC,
  SETPRICE,
} from "./cart.actionType";
export const getcartItem  = async (dispatch) => {
  dispatch({ type: GET_CART_ITEMS_LOADING });
  try {
    let res = await axios.post("http://localhost:5000/cart/");

    return dispatch({
      type: GET_CART_ITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: GET_CART_ITEMS_ERROR });
  }
};
export const addToCart =
  ({ image, id, title, cata, qty, price }) =>
  async (dispatch) => {
    // console.log(image, id, title, price);
    dispatch({ type: ADD_ITEM_TO_CART_LOADING });
    try {
      let res = await axios.post("http://localhost:5000/cart/add", {
        image,
        title,
        cata,
        qty,
        id,
        price,
      });
      return dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: ADD_ITEM_TO_CART_ERROR });
    }
  };
export const deleteItem = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEMS_LOADING });
  try {
    let res = await axios.delete(
      `https://creepy-fawn-purse.cyclic.app/api/cart/`
    );
//${id}
    return dispatch({
      type: REMOVE_CART_ITEMS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEMS_ERROR });
  }
};

export const updateQty =
  ({ id, image, cata, title, price, qty }) =>
  async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEMS_LOADING });
    try {
      let res = await axios.put(
        `https://creepy-fawn-purse.cyclic.app/api/cart/${id}`,
        { id, qty, image, cata, title, price }
      );
      return dispatch({
        type: UPDATE_CART_ITEMS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: UPDATE_CART_ITEMS_ERROR });
    }
  };
export const updateInc = (payload) => ({
  type: COUNTER_UPDATEINC,
  payload,
});
export const updateDec = (payload) => ({
  type: COUNTER_UPDATEDEC,
  payload,
});
export const priceSet = (payload) => ({
  type: SETPRICE,
  payload,
});
