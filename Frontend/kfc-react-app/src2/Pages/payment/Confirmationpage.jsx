import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import kgf from "../../logoeatmore1.jpg"
import styles from "./Confirmation.module.css"

const Confirmation = () => {
  const navigate=useNavigate()
 
  const [timer,setTimer]=useState(Number(10))
  setTimeout(() => {
    setTimer(timer-1)
}, 1000);

if(timer<1){

  navigate("/")
}
  return (
    <>
    <div className={styles.divcontent}>
      <div className={styles.divaaa}>
        <img
          className={styles.pic}
          src={kgf}
          alt=""
        />
        <h1 style={{ color:"#46aa2b",fontSize:"40px",  fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",}}>Your Order Is confirm</h1>
        <p style={{color:"#e4002b",fontWeight: "900", fontSize:"30px",fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"}}> Your order id is : 205384910</p>
        <h1 style={{ marginTop:"30px",fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize:"25px"}}>
          Your Nearest KGF Placed Your Order And Will We Deliver In Next 30 Min
        </h1>
        <h2 style={{fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize:"25px"}}>Thank For Choose KGF</h2>
        <h1 style={{fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize:"25px"}}>We Are Delight to Serve You</h1>
        <div className={styles.bot}>
        
        </div>
        <button style={{  fontSize:"20px",fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", backgroundColor:"#e4002b",border:"none",borderRadius:"20px", padding:"10px 20px"}}><Link to="/">Keep Ordering</Link></button>
        </div>
       <div>{timer>0  ? <div className={styles.redirect}>You Redirect on Home:{timer}sec</div> : ""}</div>
    </div>
    </>
  )
}
export default Confirmation;