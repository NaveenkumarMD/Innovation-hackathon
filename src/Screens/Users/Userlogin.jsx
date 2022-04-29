import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import "../../Styles/signup.css";
import SVG from "../../Images/login.svg";
import Button from "../../Components/Button";
import { db } from "../../firebase";

function Userlogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const userData = await getDoc(doc(db, "users", email));
      if (userData.exists() && userData.data().password === password) {
        navigate("/user/dashboard");
      } else {
        alert("Email/Password is wrong");
      }
    } catch (err) {
      alert("Something went wrong");
      console.log(err);
    }
  };
  return (
    <div className="signup-container">
      <div className="carousel">
        <div className="logo">ARCHIVE</div>
        <div style={{ textAlign: "center" }}>
          <img src={SVG} className="login-svg" />
        </div>
        <div style={{ textAlign: "center", color: "white" }}>
          Safe guard your documents at an extreme level
        </div>
      </div>
      <div className="container-signup">
        <div className="signup-form">
          <div className="signup-form-header">
            <div className="signup-form-header-text">Log in</div>
          </div>
          <div className="signup-form-body">
            <div className="signup-form-body-text">Continue to Archive</div>
          </div>
          <div className="content-ro">
            <div>
              <div className="label">Email</div>
              <div>
                <input
                  className="input"
                  placeholder="Enter your mail"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="label">Password</div>
              <div>
                <input
                  className="input"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div style={{ marginTop: "40px" }}></div>
          <div onClick={submit}>
            <Button text="Login" style={{ width: "20px" }} />
          </div>
          <div
            style={{ color: "#CCCCCC", fontSize: "14px", marginTop: "20px" }}
          >
            New to archive?
            <span className="link">
              <Link
                to="/user/signup"
                classname="link"
                style={{ textDecoration: "none", color: "#2766F1" }}
              >
                Signup
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userlogin;
