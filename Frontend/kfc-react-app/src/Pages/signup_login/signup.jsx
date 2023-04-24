import React, { useState } from "react";
import "./Signup.css"
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  let navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("https://creepy-fawn-purse.cyclic.app/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
      }),
    });
    const data = await response.json();
    if (data) {
        console.log(data);
      alert(data.message);
      // const timer = setTimeout(() => {
        navigate("/login");
      // }, 2000);
      // return () => clearTimeout(timer);
    }
    console.log("data:", data);
  }
  return (
    <>
    <div className="outerSection">
      <Box w={["95%","70%","50%","30%"]} className="signupsection">
        <div className="signupmainbox">
          <h1 id="signupTitle">CREATE AN ACCOUNT</h1>
          <div className="signupformdiv">
            <form onSubmit={registerUser} className="signupform">
              <div className="input-data">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {/* <div className="underline"></div> */}
                <label>Name*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="input-data">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {/* <div className="underline"></div> */}
                <label>Email*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="input-data">
                <input
                  type="tel"
                  name="mobile"
                  id="password"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
                {/* <div className="underline"></div> */}
                <label>Mobile*</label>
              </div>
              <div id="signuperrorBox"></div>
              <div className="checkifrequired">
                <div className="checkBoxflex">
                  <div className="checkBoxDiv">
                    <input type="checkbox" name="checkbox" id="checkboxtick" />
                  </div>
                  <div className="checkBoxText">
                    <p>
                      By selecting the box, you agree to our{" "}
                      <span className="cLink">Privacy Policy</span> and{" "}
                      <span className="cLink">Terms of Use.</span>
                    </p>
                  </div>
                </div>
                <div className="checkBoxflex">
                  <div className="checkBoxDiv">
                    <input type="checkbox" name="checkbox" id="checkboxtick2" />
                  </div>
                  <div className="checkBoxText">
                    <p>Sign up for Email updates and Promotions</p>
                  </div>
                </div>
              </div>
              <div className="signupBtndiv">
                <input type="submit" value="Create Account" />
              </div>
              <div className="redirecttologin">
                <p className="redirectlogintext">
                  Already a member?
                  <Link to={"/login"}>
                    <span className="redirectloginlink">Log In</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Box>
      </div>
    </>
  );
};

export default SignUp;