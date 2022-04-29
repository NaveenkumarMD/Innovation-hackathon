import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/profile.css'
import profileimg from '../Images/profile.png'
import { db } from '../firebase'
import { doc, getDoc } from "firebase/firestore";
function Profile() {
    const [data,setdata]=useState({
        name:'',
        email:'',
        phone:'',
        country:''
    })
    let usermailid=localStorage.getItem('email') || "santhoshm2504@gmail.com"
    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async () => {
        try {
            const userData = await getDoc(doc(db, "users", usermailid));
            if (userData.exists()) {
                console.log(userData.data())
                setdata(userData.data())
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div >
            <Navbar logged="true" />
            <div className='profile-container'>
                <div className='image-content'>
                    <div className='img'>
                        <img src={profileimg} alt="profile" />
                    </div>
                </div>
                <div className='image-con'>
                    <div className='label p'>Name</div>
                    <input className='input po' value={data.name} disabled />
                    <div className='br'></div>
                    <div className='label p'>Mail</div>
                    <input className='input po' value={data.email} disabled />
                    <div className='br'></div>
                    <div className='label p'>Phone</div>
                    <input className='input po' value={data.phone} disabled />
                    <div className='br'></div>
                    <div className='label p'>Country</div>
                    <input className='input po' value={data.country} disabled />

                </div>
            </div>
        </div>
    )
}

export default Profile
