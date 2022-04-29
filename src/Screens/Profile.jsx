import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/profile.css'
import profileimg from '../Images/profile.png'
function Profile() {
    return (
        <div >
            <Navbar logged="true"/>
            <div className='profile-container'>
                <div className='image-content'>
                    <div className='img'>
                        <img src={profileimg} alt="profile" />
                    </div>
                </div>
                <div className='image-con'>
                    <div className='label p'>Name</div>
                    <input className='input po' value="Naveenkumar" disabled />
                    <div className='br'></div>
                    <div className='label p'>Mail</div>
                    <input className='input po' value="naveen9715568487@gmail.com" disabled />
                    <div className='br'></div>
                    <div className='label p'>Phone</div>
                    <input className='input po' value="9715568487" disabled />
                    <div className='br'></div>
                    <div className='label p'>Country</div>
                    <input className='input po' value="India" disabled />

                </div>
            </div>
        </div>
    )
}

export default Profile
