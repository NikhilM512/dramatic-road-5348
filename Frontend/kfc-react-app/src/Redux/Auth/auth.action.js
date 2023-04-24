// import axios from "axios";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, ADMINLOGIN } from "./auth.types";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST })
  // console.log(creds,"hii")
  try {
    const response = await fetch("https://creepy-fawn-purse.cyclic.app/auth/singleuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    });
    const data = await response.json();
    // console.log(data)
    if(data.mobile==="0123456789"){
      dispatch({type: ADMINLOGIN, payload:data});
    }
    alert("Congratulations..!,Login Successfull...!")
      dispatch({ type: LOGIN_SUCCESS, payload: data })
      // console.log(response.data)
      // return data;
     
  }
  catch (e) {
      alert("Something Went Wrong, Please try again later...")
      dispatch({ type: LOGIN_ERROR, payload: e.message })
      console.log(e)
     
  }
}


const authlogout = () => ({type : LOGOUT});

export default authlogout;
