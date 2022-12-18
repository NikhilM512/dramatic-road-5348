import { ADMINLOGIN, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.types";

let token = localStorage.getItem("user");
const intialState = {
    adminAuth:false,
    isAuth: false,
    token: token,
    user: {},
    loading: false,
    error: false,
    errorMessage: "",
};

export const authReducer = (state = intialState, { type, payload }) => {
    console.log(type)
    switch (type) {
        case LOGIN_REQUEST: {

            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case LOGIN_SUCCESS: {
            localStorage.setItem("user",JSON.stringify(payload));
            return {
                ...state,
                isAuth: true,
                user: payload,
                loading: false,
                error: false,
            }
        }
        case ADMINLOGIN:{
            return{
                ...state,
                adminAuth:true,
                error:false
            }
        }
        case LOGIN_ERROR: {

            return {
                ...state,
                isAuth: false,
                adminAuth:false,
                loading: false,
                error: true,
                errorMessage: payload
            }
        }

        case LOGOUT: {
            localStorage.removeItem("user");
            return {
                ...state,
                adminAuth:false,
                isAuth: false,
                user: "",
            }
        }
        default: {
            return state;
        }
    }
}