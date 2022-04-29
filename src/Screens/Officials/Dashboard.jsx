import React from "react";
import Dashboardcard from "../../Components/DashboardCard";

import Navbar from "../../Components/Navbar";

function Dashboard() {
  return (
    <div>
      <Navbar logged={true} />
      <Dashboardcard />
    </div>
  );
}

export default Dashboard;
