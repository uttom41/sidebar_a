import React, { useState } from "react";
import { Link,Outlet } from "react-router-dom";

import "./sidebar.css";
import logo from './logo.png';


const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);
	const [mode, setMode] = useState(false);
	const sidebarClass = `sidebar ${sidebar ? 'close' : ''}`;
	const modeClass = `navBody ${mode ? 'dark' : ''}`;


	return (
		<div className={modeClass}>
			<nav className={sidebarClass}>
				<header>
					<div class="image-text">
						<span class="image">
							<img src={logo} alt="logo pic" />
						</span>

						<div class="text header-text">
							<span class="name"> SidebarA </span>
							<span class="profession"> Web developer </span>
						</div>
					</div>

					<i class='bx bx-chevron-right toggle' onClick={()=> setSidebar(!sidebar)}> </i>
				</header>

            <div class="menu-bar">
                <div class="menu">
                    <li class="search-box">
                        <Link to="#">
                            <i class='bx bx-search icon'> </i>
                            <input type="search" placeholder="search..."/>
                        </Link>
                    </li>

                    <ul class="menu-links">
                        <li class="nav-link">
                            <Link to="#">
                                <i class='bx bx-home-alt icon'> </i>
                                <span class='text nav-text'>Dashboard</span>
                            </Link>
                        </li>
                        <li class="nav-link">
                            <Link to="#">
                                <i class='bx bx-home-alt icon'> </i>
                                <span class='text nav-text'>Dashboard</span>
                            </Link>
                        </li>
                        <li class="nav-link">
                            <Link to="#">
                                <i class='bx bx-home-alt icon'> </i>
                                <span class='text nav-text'>Dashboard</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div class="bottom-content">
                    <li class="">
                        <Link to="#">
                            <i class='bx bx-log-out icon'> </i>
                            <span class="text nav-text">Logout </span>
                        </Link>
                    </li>

                    <li class="mode">
                        <div class="moon-sun">
                            <i class="bx bx-moon icon moon"></i>
                            <i class="bx bx-sun icon sun"></i>
                        </div>
                        <span class='mode-text text'> {mode ? "Dark Mode" : "Light Mode"}</span>

                        <div class="toggle-switch" onClick={()=>setMode(!mode)}>
                            <span class='switch'> </span>
                        </div>
                    </li>
                </div>
            </div>
        </nav>

        <section class="home">
           <Outlet />
        </section>
			
		</div>
	);
};

export default Sidebar;
