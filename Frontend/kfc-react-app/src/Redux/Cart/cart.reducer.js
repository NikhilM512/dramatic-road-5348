import React from 'react'
import { SET_FINAL_CART_ITEMS, SET_FINAL_CART_PRICE } from './actionTypes'

const initialState = {
    finalPrice: 0,
    finalItems: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FINAL_CART_PRICE:
            return (
                {
                    ...state, finalPrice: action.payload
                }
            )

        case SET_FINAL_CART_ITEMS:
            return (
                {
                    ...state, finalItems: action.payload
                }
            )
        default:
            return state
    }
}

export {cartReducer};