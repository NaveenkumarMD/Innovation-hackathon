import React from 'react'
import '../Styles/navbar.css'
import { IoIosNotifications, IoMdContact } from "react-icons/io";
import {useNavigate} from 'react-router-dom'
function Navbar({logged=false,sign=false,handlesign=()=>{}}) {
    const navigate=useNavigate()
    const notificationsclick=()=>{
        navigate("/notifications")
    }
    return (
        <div className='navbar'>
            <div className='logo' style={{color:"#2766F1",fontSize:"30px"}}>
                Archive
            </div>
            {
                logged &&
                <div className=' right-nav'>
                    <div className='navbar-item'>
                        <IoIosNotifications size={30} color="#CCCCCC" onClick={notificationsclick} />
                        {/* <span>Notifications</span> */}
                    </div>
                    <div className="navbar-item">
                        <IoMdContact size={30} color="#CCCCCC" />
                        {/* <span>Profile</span> */}
                    </div>
                    <div className='navbar-item sign-button' onClick={handlesign}>
                        Sign Doc
                    </div>
                </div>
            }

        </div>
    )
}

export default Navbar
