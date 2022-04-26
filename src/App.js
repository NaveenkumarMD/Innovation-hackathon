import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from './Screens/Home'
import Officiallogin from "./Screens/Officials/Officiallogin"
import Officialsignup from "./Screens/Officials/Officialsignup"
import Userlogin from "./Screens/Users/Userlogin"
import Usersignup from "./Screens/Users/Usersignup"

const App=()=>{
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user/signup" exact element={<Usersignup/>} />
          <Route path="/user/login" exact element={<Userlogin/>} />
          <Route path="/officer/login" exact element={<Officiallogin/>} />
          <Route path="/officer/signup" exact element={<Officialsignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App