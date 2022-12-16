import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import style from './login.module.css'
import kgf from "../image/kgf.jpeg"
import LoginAuth from "./LoginAuth";
import {
    getAuth,
    signInWithPhoneNumber,
    RecaptchaVerifier,
    updateProfile,
  } from "firebase/auth";
// import { useDispatch } from "react-redux";
import { app } from "../config/firebaseConfig"


const Login = () => {

    const auth = getAuth();
    const user = auth.currentUser;
    // const dispatch =useDispatch()

//   const navigate=useNavigate();
  const[form,setForm]=useState("")
  const [name, setName]=useState("")
  const [getOtp,setgetOtp]=useState(false);
    const handeonchange=(e)=>{
      let value=e.target.value
       setForm("91"+value)
        
    }
//    const handeOnSubmit=(e)=>{
//     e.preventDefault();
//     console.log(form)
    
    // localStorage.setItem("data",form)
    // navigate("/Login/auth")
//    }
  const skipfun=()=>{
    //   navigate('/')
  }


  const genrateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {}
      },
      auth
    );
  };

  const handeOnSubmit = (e) => {
    e.preventDefault();
    if (form === "" || form === undefined || form.length < 12)
      return alert("invalid phone No.");
    genrateRecaptcha();
    const AppVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+${form}`, AppVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setgetOtp(true);
      })
      .catch((error) => {
        alert("Error SMS not sent please try again" + `${error}`);
        genrateRecaptcha();
      });
  };



  return <div className={style.container}  >
    {!getOtp?
    <div>

        <div >
            <div >Sign In / Sign up</div><br/><br/>
            <div> <img 
            // src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
            src={kgf}
            alt="kfc logo" className={style.pic} tabindex="1"/></div><br/><br/>
            <div className={style.title} >LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</div>
        </div>
		<form onSubmit={handeOnSubmit}>
        <div>
            <input type="name" placeholder="User name" required onChange={(e)=> setName(e.target.value)} className={style.numberbox}/>
            <input maxLength={10} type='tel'  name="number" onChange={handeonchange} className={style.numberbox} placeholder='Phone Number*'  required/><br/>
            {form.length!=12 && form > 0 ? <div style={{color:"red",textAlign:"left",display:"flex",alignItems:"center"}}><img src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2021_10_27_16_49/images/Error.svg" alt=""/><span style={{marginLeft:"10px"}}>Please enter a valid 10-digit mobile number</span></div> : ""}<br/>
        </div> 
       
        <div  >
            <div className={style.checkbox}> By “logging in to KFC”, you agree to our <u><b >Privacy Policy</b></u> and
                <u><b  >Terms &amp; Conditions.</b></u></div><br/>
        </div>
        <div  >
            <button type="submit" className={style.sendbox}>Send Me a Code</button>
        </div>
		</form>
    <br/>
        <div >
                <div  >--------------------or----------------------</div>
                <button className={style.skipbox} onClick={skipfun} >Skip, Continue As Guest</button>
        </div>
        <div id="sign-in-button" />
        </div>:<LoginAuth phnum={form} username={name} updateotp={setgetOtp}/>}
    </div>
};

export default Login;