import React from "react";
import { NavLink} from "react-router-dom";
import "./SidebarOption.scss";

const SidebarOption = ({ title, Icon, to }) => {
  

  return (
    
      <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption__icon" />}
        {Icon ? <NavLink exact={true} activeClassName="active" to={to}><h4>{title}</h4></NavLink> : <p>{title}</p>}
      </div>
    
  );
};

export default SidebarOption;
