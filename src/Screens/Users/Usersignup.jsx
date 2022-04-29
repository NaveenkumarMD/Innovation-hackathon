import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";

import "../../Styles/signup.css";
import SVG from "../../Images/login.svg";
import Button from "../../Components/Button";
import { db } from "../../firebase";

function Usersignup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    if (password && password !== confirmpassword) {
      return alert("Password not matched");
    } else {
      try {
        const docRef = await setDoc(doc(db, "users", email), {
          name: name,
          email: email,
          password: password,
          phone: phone,
          country: country,
        });
        navigate("/user/dashboard");
        localStorage.setItem("email", email);
      } catch (e) {
        alert("Something went wrong");
        console.error("Error adding document: ", e);
      }
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
            <div className="signup-form-header-text">Sign up</div>
          </div>
          <div className="signup-form-body">
            <div className="signup-form-body-text">Sign up to Archive</div>
          </div>
          <div className="content-row">
            <div>
              <div className="label">Name</div>
              <div>
                <input
                  className="input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
            </div>
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
          </div>
          <div className="content-row">
            <div>
              <div className="label">Mobile</div>
              <div>
                <input
                  className="input"
                  placeholder="Enter your number"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="label">Country</div>
              <div>
                <input
                  className="input"
                  placeholder="Enter your Country"
                  value={country}
                  onChange={(e) => setcountry(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="content-row">
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
            <div>
              <div className="label">Connfirm password</div>
              <div>
                <input
                  className="input"
                  type="password"
                  placeholder="Enter your password again"
                  value={confirmpassword}
                  onChange={(e) => setconfirmpassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}></div>
          <div onClick={submit}>
            <Button text="Signup" />
          </div>
          <div
            style={{ color: "#CCCCCC", fontSize: "14px", marginTop: "20px" }}
          >
            Already have an account?
            <span className="link">
              <Link
                to="/user/login"
                classname="link"
                style={{ textDecoration: "none", color: "#2766F1" }}
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usersignup;
