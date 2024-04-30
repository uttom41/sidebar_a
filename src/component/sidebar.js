import React, { useState } from "react";
import { Link,Outlet } from "react-router-dom";
import { MenuItem } from "./menu_items";

import "./sidebar.css";
import logo from './logo.png';
import SubMenu from "./subnev";




const Sidebar = ({childrens}) => {
	// console.log(childrens);
	// if (Array.isArray(childrens)) {
	// 	const areAllChildrenProps = childrens.every(child => (
	// 	   child === 'object' && 
	// 	  child !== null && 
	// 	   child.title === 'string' && 
	// 	   child.path === 'string' && 
	// 	   child.icon === 'object'
	// 	));
		
	// 	if (!areAllChildrenProps) {
	// 	  throw new Error('All children of Sidebar must be objects with MenuItem properties');
	// 	}
	//   }

	const [sidebar, setSidebar] = useState(false);
	const [mode, setMode] = useState(false);
	const sidebarClass = `sidebar ${sidebar ? 'close' : ''}`;
	const modeClass = `navBody ${mode ? 'dark' : ''}`;

	return (
		<div className={modeClass}>
			<nav className={sidebarClass}>
				<header>
					<div className="image-text">
						<span className="image">
							<img src={logo} alt="logo pic" />
						</span>

						<div className="text header-text">
							<span className="name"> SidebarA </span>
							<span className="profession"> Web developer </span>
						</div>
					</div>

					<i className='bx bx-chevron-right toggle' onClick={()=> setSidebar(!sidebar)}> </i>
				</header>

            <div className="menu-bar">
                <div className="menu">
                    <li className="search-box">
                        <Link to="#">
                            <i className='bx bx-search icon'> </i>
                            <input type="search" placeholder="search..."/>
                        </Link>
                    </li>

					{childrens.map((item, index) => {
						console.log(item.path);
						return (
							<ul className = "menu-links">
							<li className = "nav-link">
								<Link to= {item.props.path}>
								
									<i className = {item.props.icon} > </i>
									<span className =' text nav-text'> {item.props.title} </span>
{/* 
								     <SubMenu item = {item.props} key={index}/> */}
								</Link>
							</li> 
						</ul>
						);
					})}
                </div>

                <div className="bottom-content">
                    <li className="">
                        <Link to="#">
                            <i className='bx bx-log-out icon'> </i>
                            <span className="text nav-text">Logout </span>
                        </Link>
                    </li>

                    <li className="mode">
                        <div className="moon-sun">
                            <i className="bx bx-moon icon moon"></i>
                            <i className="bx bx-sun icon sun"></i>
                        </div>
                        <span className='mode-text text'> {mode ? "Dark Mode" : "Light Mode"}</span>

                        <div className="toggle-switch" onClick={()=>setMode(!mode)}>
                            <span className='switch'> </span>
                        </div>
                    </li>
                </div>
            </div>
        </nav>

        {/* <section className="home">
           <Outlet />
        </section> */}
			
		</div>
	);
};

export default Sidebar;
