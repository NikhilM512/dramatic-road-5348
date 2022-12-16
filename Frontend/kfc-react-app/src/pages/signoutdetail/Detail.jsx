import React from 'react'
import styles from "./Detail.module.css";
import {Link, useNavigate} from "react-router-dom"

  

const Detail = () => {
    
const navigate=useNavigate()
const logout=()=>{
    localStorage.removeItem("otp")
    localStorage.removeItem("data")
    navigate("/")
}

    
    return (
        <>


            <div className={styles.big}>
                <div className={styles.left}>
                    <div className={styles.in}>
                    <div ><img  src='https://online.kfc.co.in/static/media/Strips.4f336307.svg' alt='' /></div>
                    <h1 className={styles.texthead1}>HELLO </h1>
                    <h1 className={styles.texthead2}>KFC LOVERS!</h1>
                    <br/>
                    <br/>
                    <p style={{color:"#7d7d7f"}}>Order History</p>
                    <p style={{color:"#7d7d7f"}}>My Favorite Menu</p>
                    <p style={{color:"#7d7d7f"}}>Addresses</p>
                    <p style={{color:"#7d7d7f"}}>Account Settings</p>
                    <br/>
                    <br/>
                    <br/>
                    <button onClick={logout}style={{padding:"6px 15px",border:"1px solid white",borderRadius:"20px",background:"#202124",color:"white"}}>Sign Out</button>
                    </div>

                </div>
                <div className={styles.right}>
                    <div className={styles.right1}>
                        <div className={styles.rightin}>
                            <h3>ORDER HISTORY</h3>
                            <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
                                <p>Looking for a specific order?</p>
                                <button style={{padding:"3px 25px", border: "1px solid rgb(74, 72, 72)",borderRadius:"20px",background:"white",}}>Order lookup</button>
                            </div>
                        </div>
                        <div style={{textAlign:"left", marginTop:"50px"}}>
                            <p style={{color:"#858585"}}>No orders have been placed in the past 12 months.</p>
                            <Link to="/menu"><button style={{padding:"12px 25px",borderRadius:"20px",background:"black",color:"white",marginTop:"4px"}}>View menu</button></Link>
                        </div>
                    </div>
                    <div className={styles.leftin}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}> 
                        <div style={{marginTop:"25px"}}>
                            <h3 style={{textAlign:"start", margin:0,padding:0}}>HAVE A QUESTION?</h3>
                            <p style={{textAlign:"start", margin:0,padding:0}}>Connect with a specialist for answers.</p>
                        </div>
                        <div style={{marginTop:"25px"}}><Link to="/Help"><button style={{padding:"12px 30px",border:"2px solid black",borderRadius:"30px",background:"white",}}>Get Help</button></Link></div>
                        
                    </div>



                    </div>

                </div>
            </div>
            

        </>




    )
}

export default Detail