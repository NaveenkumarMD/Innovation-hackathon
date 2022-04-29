import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Screens/Home";
import Notifications from "./Screens/Notifications";
import Dashboard from "./Screens/Officials/Dashboard";
import Officiallogin from "./Screens/Officials/Officiallogin";
import Officialsignup from "./Screens/Officials/Officialsignup";
import Viewdoc from "./Screens/Officials/Viewdoc";
import Createnew from "./Screens/Users/Createnew";
import UserDashboard from "./Screens/Users/UserDashboard";
import Userlogin from "./Screens/Users/Userlogin";
import Profile from "./Screens/Profile"
import Usersignup from "./Screens/Users/Usersignup";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/signup" exact element={<Usersignup />} />
          <Route path="/user/login" exact element={<Userlogin />} />
          <Route path="/officer/login" exact element={<Officiallogin />} />
          <Route path="/officer/signup" exact element={<Officialsignup />} />
          <Route path="/officer/dashboard" exact element={<Dashboard />} />
          <Route path="/user/dashboard" exact element={<UserDashboard/>} />
          <Route path="/notifications" exact element={<Notifications/>}/>
          <Route path="/user/createnew" exact element={<Createnew />}/>
          <Route path="/officer/viewdoc" exact element={<Viewdoc/>}/>
          <Route path="/profile" exact element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
