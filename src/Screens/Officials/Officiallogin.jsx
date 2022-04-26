import React from 'react'
import '../../Styles/signup.css'
import SVG from '../../Icons/login.svg'
import Button from '../../Components/Button'
import { Link } from 'react-router-dom'
function Officiallogin() {
    return (
        <div className='signup-container'>
            <div className='carousel'>
                <div className='logo'>
                    ARCHIVE
                </div>
                <div style={{ textAlign: "center" }}>
                    <img src={SVG} className="login-svg" />
                </div>
                <div style={{ textAlign: "center", color: "white" }}>Safe guard your documents at an extreme level</div>
            </div>
            <div className='container-signup'>
                <div className='signup-form'>
                    <div className='signup-form-header'>
                        <div className='signup-form-header-text'>
                            Log in
                        </div>
                    </div>
                    <div className='signup-form-body'>
                        <div className='signup-form-body-text' >
                            Continue to Archive
                        </div>
                    </div>
                    <div className='content-ro'>
                        <div>
                            <div className='label'>Email</div>
                            <div>
                                <input className='input' placeholder='Enter your mail' />
                            </div>
                        </div>
                        <div>
                            <div className='label'>Email</div>
                            <div>
                                <input className='input' placeholder='Enter your mail' />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: "40px" }}></div>
                    <Button text="Login" style={{ width: "20px" }} />
                    <div style={{ color: "#CCCCCC", fontSize: "14px", marginTop: "20px" }}>
                        New to archive?<span className='link'><Link to="/users" classname="link" style={{ textDecoration: "none", color: "#2766F1" }}>Signup</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Officiallogin
