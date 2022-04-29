import React from 'react'
import '../Styles/dashboardCard.css'
import { MdExpandMore,MdDone,MdClear,MdInfo} from 'react-icons/md'
import Navbar from '../Components/Navbar'
import { IoMdInformation } from "react-icons/io";
import '../Styles/notifications.css'
function Notifications() {
    return (
        <>
            <Navbar logged="true" />
            <div className="qcontainer">
                <div className="qtitle">
                    Notifications
                </div>
                <div className="qcontent">

                <Failure/>
                <Info/>
                <Success/>

                </div>
            </div>
        </>
    )
}

export default Notifications
const Success = () => {
    return (
        <div className='ncard success'>
            <div className='nleft'>
            <div>
                <div className='icon-container'>
                    <MdDone color='black'/>
                </div>
            </div>
            <div className='ntext'>
                Your permission letter has been signed successfully.
            </div>
            </div>
            <div className='nclose'>
                <MdClear color='rgba(0,0,0,5)' size={24}/>
            </div>
        </div>
    )
}
const Failure = () => {
    return (
        <div className='ncard failed'>
<div className='nleft'>
            <div>
                <div className='icon-container'>
                    <MdClear color='black'/>
                </div>
            </div>
            <div className='ntext'>
                Your leave letter has been rejected.
            </div>
            </div>
            <div className='nclose'>
                <MdClear color='rgba(0,0,0,5)' size={24}/>
            </div>
        </div>
    )
}
const Info = () => {
    return (
        <div className='ncard info'>
<div className='nleft'>
            <div>
                <div className='icon-container'>
                    <IoMdInformation color='black'/>
                </div>
            </div>
            <div className='ntext'>
                Your permission letter has been opened by the manager
            </div>
            </div>
            <div className='nclose'>
                <MdClear color='rgba(0,0,0,5)' size={24}/>
            </div>
        </div>
    )
}