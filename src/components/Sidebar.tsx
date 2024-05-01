import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { TbLogout2 } from "react-icons/tb";
import { IoIosArrowBack, IoMdMenu } from "react-icons/io";



import "./style.css";
import routes from "../routes";
import profilePic from "../assets/user.png";
import logoPic from "../assets/logo.png";
interface SidebarProps {
  children?: React.ReactNode;
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props) => {
  const [sidebar, setSidebar] = useState(false);
  const [subMenu, setSubmenu] = useState("");

  return (
    <>
      <div className={sidebar ? "sidebar" : "sidebar close"}>
        <div className="logo-details">
          <img src={logoPic} className="logo-style" />
          <span className="logo_name">Admin</span>
        </div>

        <ul className="nav-links">
          {routes.map((item, index) => {
            return (
              <li className={subMenu === item.title ? "showMenu" : ""}>
                <div className="iocn-link">
                  <NavLink to={item.path} key={index}>
                    <div className="icon">{item.icon} </div>
                    <span className="link_name">{item.title}</span>
                  </NavLink>
                  {item.subNav && <div
                    className="arrow"
                    onClick={() =>
                      setSubmenu(subMenu === item.title ? "" : item.title)
                    }
                  >{item.iconOpened}</div>}
                </div>
                <ul className="sub-menu">
                  <NavLink className="link_name" to={item.path} key={index}>
                    {item.title}
                  </NavLink>
                  {item.subNav &&
                    item.subNav.map((subItem, subIndex) => {
                      return (
                        <li>
                          <NavLink
                            className="sub_link_name"
                            to={subItem.path}
                            key={subIndex}
                          >
                            <div className="icon">{subItem.icon} </div>
                            <span className="link_name">{subItem.title}</span>
                          </NavLink>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}

          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src={profilePic} alt="profileImg" />
              </div>
              <div className="name-job">
                <div className="profile_name">Prem Shahi</div>
                <div className="job">Web Desginer</div>
              </div>
              <TbLogout2 />
            </div>
          </li>
        </ul>
      </div>

      <section className="home-section">
        <div className="home-content">
          <IoMdMenu onClick={() => setSidebar(!sidebar)} />
          <main className="text">{props.children}</main>
        </div>
      </section>
    </>
  );
});

export default Sidebar;
