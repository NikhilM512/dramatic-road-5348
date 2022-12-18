import React from 'react'
import "./Help.css"
import kgf from "../../image/kgf.jpeg"
const Help = () => {
    return (
        <>
            <div class="img-container">
                <img
                    // src="https://online.kfc.co.in/static/media/getHelp.c28c1243.svg" 
                    src={kgf}
                    alt="background-img" />
                <div>GET HELP</div>
            </div>
            <div class="how-help-box">
                <div class="help-text">
                    <p>HOW CAN WE HELP YOU?</p>
                </div>
                <div class="help-box-flex">
                    <div class="help-box">
                        <p>NEAREST KFC</p>
                        <span class="kfc-line"></span>
                        <p>NEED TO TALK?</p>
                        <span class="kfc-line"></span>
                        <p>CONTACT US</p>
                        <span class="kfc-line"></span>
                    </div>
                    <div class="container-find-kfc">
                        <div class="find-a-kfc">
                            <button>Find a KFC</button>
                        </div>
                        <div class="call-us">
                            <p>Call us.</p>
                            <p>080-4275-4444</p>
                        </div>
                        <div class="contact-us">
                            <p>Have an issue with your order?</p>
                            <button><i class="fa-solid fa-envelope"></i>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="faq">
                <div class="faq-text">
                    <p>FAQ</p>
                </div>
                <div class="four-buttons">
                    <button class="but-style">Ordering</button>
                    <button class="but-style">Account</button>
                    <button class="but-style">Payment</button>
                    <button class="but-style">Promotions</button>
                </div>
                <div class="all-faq">
                    <button>View All FAQs</button>
                </div>
            </div>


        </>
    )
}

export default Help