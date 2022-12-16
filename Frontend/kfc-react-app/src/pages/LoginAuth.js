import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "./loginAuth.module.css"
import kgf from "../image/kgf.jpeg"
import {
    getAuth,
    updateProfile,
  } from "firebase/auth";
  import ReactCodeInput from "react-code-input";
  import { app } from "../config/firebaseConfig"




const LoginAuth = ({phnum, username,updateotp}) => {

   
    const navigate=useNavigate()
    const data=localStorage.getItem("data");
    const [timer,setTimer]=useState(Number(30));
    const [Otp,setOtp]=useState("");
    const [isPinCodeValid, setIsPinCodeValid] = useState(true);
    ;
   
    setTimeout(() => {
        setTimer(timer-1)
    }, 1000);
   let disable;
   if(timer<0){
      disable=true;
   }

   let bag=""

   
    const handeSubmit=(e)=>{
        e.preventDefault()
        if(bag==="1234") {
           localStorage.setItem("otp",bag)
        //    navigate("/")
        }
    }

    const handlePinChange = Otp => {
        setOtp(Otp);
       
      };

      const auth = getAuth();
      const checkPinCode=(e)=>{
        e.preventDefault();
        if (Otp.length === 6) {
          console.log(Otp);
          let confirmationResult = window.confirmationResult;
          confirmationResult
            .confirm(Otp)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName:username
                  });
              const {displayName, uid} = userCredential.user;
              console.log(displayName, uid);
              
              setIsPinCodeValid(true);
              })
            .catch((error) => {
                setIsPinCodeValid(false);
              alert(error);
            });
        }
      }


  return (
    <div className={style.container}>
        <div >
            <div >Sign In / Sign up</div><br/><br/><br/><br/><br/><br/>
            <div> <img src={kgf} alt="kfc logo" tabindex="1"/></div><br/><br/><br/><br/><br/><br/>
            <div className={style.title} >WE JUST TEXTED YOU</div><br/><br/><br/>
            <div className={style.num}>Please enter the verification code we just sent to <b>{phnum}</b></div><br/><br/>
            <div className={style.num1} onClick={()=>updateotp(false)}>Different Number?</div>
        </div><br/>
		<form onSubmit={checkPinCode}>
        <ReactCodeInput
        id="pinCode"
        type="text"
        isValid={isPinCodeValid}
        fields={6}
        onChange={handlePinChange}
        value={Otp}
      />
       
       

        <div>{timer<0 ?<div style={{color:"red",display:"flex",justifyContent:"center"}}><img src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2021_10_27_16_49/images/Error.svg" alt=""/><span style={{marginLeft:"10px"}}>Your code has expired!</span></div> : "" }</div>
        
        <div>
         <div className={style.timer}>{timer>0  ? <div className={style.resend}>Your code will expire in 0:{timer}sec</div> : ""}</div><br/>
         <div className={style.resend} onClick={() => window.location.reload(false)}>Resend the Code</div>
        </div> <br/><br/> <br/>

        <div  >
            <button type="submit"className={style.submit} disabled={disable}>Submit</button>
        </div>
		</form>
    </div>
  )
}

export default LoginAuth;