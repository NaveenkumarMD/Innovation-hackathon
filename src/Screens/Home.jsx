import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/home.css'
import SVG1 from "../Images/one.svg"
import SVG2 from "../Images/two.svg"
import SVG3 from "../Images/three.svg"
import logo from '../Images/archieve.jpg'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div style={{
            width: "100vw",
            overflowX:"hidden !important"
        }}>
            <div class="header">

                <div class="container">
                    <div class="navbar">
                        <div class="logo">
                            <img src={logo} width="100px" />
                        </div>
                        <nav>
                            <ul>
                                <li><a href="">GitHub</a></li>
                                <li><a href="">Contact Us</a></li>
                                <Link to="/user/login"><a href="">Login</a></Link>
                            </ul>
                        </nav>

                    </div>
                    <div class="row" style={{marginTop:"120px"}}>
                        <div class="col-1">
                            <img src={SVG3} alt="" />
                        </div>
                        <div class="col-1">
                            <h1 style={{fontSize:"60px"}}>
                                This is Archive
                            </h1>
                            <p style={{fontSize:"20px"}}>
                                This is Archive...We are here to help you!! <br/>
                                    a collection of historical documents or records providing information about a place,
                                    institution, or
                                    group of people.
                            </p>

                        </div>
                    </div>
                </div>
            </div>


            <div class="container2">
                <h2 class="title1">About Us</h2>

                <div class="row">
                    <div class="col-2">
                        <h1>
                            This is Archive
                        </h1>
                        <p>
                            This is Archive...We are here to help you!! <br />
                            a collection of historical documents or records providing information <br /> a place,
                            institution, or
                            group of people.
                        </p>
                    </div>
                    <div class="col-2">

                        <img src={SVG1} alt="" />
                    </div>
                </div>
            </div>





            <div class="container3">

                <div class="row">
                    <div class="col-3">
                        <img src={SVG2} alt="" />
                    </div>
                    <div class="submit-container">
                        <h1>
                            Contact Us
                        </h1>
                        <div>
                            <div className='label'>Name</div>
                            <div>
                                <input className='input' placeholder='Enter your name'  />
                            </div>
                        </div>
                        <div style={{marginTop:"20px"}}></div>
                        <div>
                            <div className='label'>Email</div>
                            <div>
                                <input className='input' placeholder='Enter your mail'  />
                            </div>
                        </div>
                        <div style={{marginTop:"20px"}}></div>
                        <div>
                            <div className='label'>Query</div>
                            <div>
                                <input className='input' placeholder='Enter your query'  />
                            </div>
                        </div>
                        <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '30px',
                            backgroundColor:"#2766F1",
                            color:"white",
                            padding:"10px 20px",
                            borderRadius:"7px",
                            cursor:"pointer"

                        }}
                        >
                            Submit
                        </div>
                        {/* <!-- <p>
                                This is Archive...We are here to help you!! <br>
                                    a collection of historical documents or records providing information about a place,
                                    institution, or
                                    group of people.
                            </p> --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
