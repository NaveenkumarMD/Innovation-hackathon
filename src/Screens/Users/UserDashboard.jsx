import React from 'react'
import Dashboardcard from '../../Components/DashboardCard'
import Navbar from '../../Components/Navbar'
import Userdahcard from '../../Components/Userdahcard'
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import '../../Styles/newdoc.css'
function UserDashboard() {
  const navigate = useNavigate()
  const opennew = () => {
    navigate("/user/createnew")
  }
  return (
    <div>
      <Navbar logged="true" />
      <Userdahcard />
      <div className='new' onClick={opennew}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <IoIosAdd size={20} />
        </div>
        <div >new</div>
      </div>
    </div>
  )
}

export default UserDashboard
