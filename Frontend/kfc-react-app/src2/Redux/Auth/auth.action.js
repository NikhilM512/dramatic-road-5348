// import axios from "axios";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, ADMINLOGIN } from "./auth.types";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST })
  console.log(creds,"hii")
  try {
    const response = await fetch("https://creepy-fawn-purse.cyclic.app/auth/singleuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    const data = await response.json();
    if(data.mobile==="7800142610"){
      dispatch({type: ADMINLOGIN, payload:data});
    }
    dispatch({ type: LOGIN_SUCCESS, payload: data })
      // console.log(response.data)
      return data;
     
  }
  catch (e) {
      dispatch({ type: LOGIN_ERROR, payload: e.message })
      console.log(e)
  }
}


const authlogout = () => ({type : LOGOUT});

export default authlogout;
