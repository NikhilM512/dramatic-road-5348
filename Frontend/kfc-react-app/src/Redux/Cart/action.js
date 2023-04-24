import { SET_FINAL_CART_ITEMS, SET_FINAL_CART_PRICE } from "./actionTypes"


export const setFinalCartPrice = (payload) => {
    console.log("A",payload)
    return { type: SET_FINAL_CART_PRICE, payload }
}

export const setFinalCartItems = (payload) => {
    console.log("B",payload)
    return { type: SET_FINAL_CART_ITEMS, payload }
}