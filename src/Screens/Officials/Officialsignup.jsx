import React from 'react'
import '../../Styles/signup.css'
import SVG from '../../Icons/login.svg'
import Button from '../../Components/Button'
import { Link } from 'react-router-dom'
function Officialsignup() {
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
                            Sign up
                        </div>
                    </div>
                    <div className='signup-form-body'>
                        <div className='signup-form-body-text' >
                            Sign up to Archive
                        </div>
                    </div>
                    <div className='content-row'>
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
                    <div className='content-row'>
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
                    <div className='content-row'>
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
                    <div style={{marginTop:"40px"}}></div>
                    <Button text="Signup" />
                    <div style={{color:"#CCCCCC",fontSize:"14px",marginTop:"20px"}}>
                        Already have an account?<span className='link'><Link to="/users" classname="link" style={{textDecoration:"none",color:"#2766F1"}}>Login</Link></span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Officialsignup
