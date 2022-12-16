import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import style from './login.module.css'
import kgf from "../image/kgf.jpeg"
const Login = () => {
//   const navigate=useNavigate();
  const[form,setForm]=useState()
    const handeonchange=(e)=>{
      let value=e.target.value
       setForm(
            value
       )
        
    }
   const handeOnSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("data",form)
    // navigate("/Login/auth")
   }
  const skipfun=()=>{
    //   navigate('/')
  }
  return <div className={style.container}  >
        <div >
            <div >Sign In / Sign up</div><br/><br/>
            <div> <img 
            // src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
            src={kgf}
            alt="kfc logo" className={style.pic} tabindex="1"/></div><br/><br/>
            <div className={style.title} >LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</div>
        </div><br/><br/>
		<form onSubmit={handeOnSubmit}>
        <div>
            <input type="name" placeholder="User name" className={style.numberbox}/>
            <input maxLength={10} type='tel'  name="number" onChange={handeonchange} className={style.numberbox} placeholder='Phone Number*'  required/><br/>
            {form < 1000000000 && form > 0 ? <div style={{color:"red",textAlign:"left",display:"flex",alignItems:"center"}}><img src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2021_10_27_16_49/images/Error.svg" alt=""/><span style={{marginLeft:"10px"}}>Please enter a valid 10-digit mobile number</span></div> : ""}<br/>
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
    </div>
};

export default Login;