import React from "react";

import NavbarComponent from "../../components/dashboardComponents/navbar";
import SideBar from "../../components/dashboardComponents/sidebar";

/**
 * @author
 * @function AdminPanelDashboard
 **/

const AdminPanelDashboard = (props) => {
  return (
    <div>
      <NavbarComponent history={props.history} />
      <SideBar />
    </div>
  );
};

export default AdminPanelDashboard;
