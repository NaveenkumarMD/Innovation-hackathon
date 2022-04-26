import React from 'react'
import '../Styles/navbar.css'
import { IoIosNotifications, IoMdContact } from "react-icons/io";
function Navbar({logged=false}) {
    return (
        <div className='navbar'>
            <div className='logo'>
                Archive
            </div>
            {
                logged &&
                <div className=' right-nav'>
                    <div className='navbar-item'>
                        <IoIosNotifications size={24} color="#CCCCCC" />
                        {/* <span>Notifications</span> */}
                    </div>
                    <div className="navbar-item">
                        <IoMdContact size={24} color="#CCCCCC" />
                        {/* <span>Profile</span> */}
                    </div>
                </div>
            }

        </div>
    )
}

export default Navbar
