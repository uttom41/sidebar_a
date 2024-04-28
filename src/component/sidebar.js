// Filename - components/Sidebar.js

import React, { useState } from "react";
import { Link,Outlet } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "./sidebar.css";


const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);
	const [isActiveNave, setIsactiveNave] = useState("home")

	const showSidebar = () => setSidebar(!sidebar);

	const setNavName = (name) => setIsactiveNave(name);


	return (
		<div className={(sidebar ? 'expander' : 'navBody')}>
			<div className={'l-navbar ' + (sidebar ? 'show' : 'undefined')} >
				<nav className="nav">
					<div>
					<div class="profile">
						<img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture"/>
						<h3>Anamika Roy</h3>
						<p>Designer</p>
            		</div>

						<button onClick={showSidebar} className="nav__toggle">
       						<i className={sidebar ? 'bx bx-chevron-left' : 'bx bx-chevron-right'}></i>
     					</button>

						<ul sidebar={sidebar} class="nav__list">

                        <a href="#" className={((isActiveNave === "home") ? 'active' : 'nav__link')} onClick={ () =>setNavName("home")}>
                            <i class='bx bx-grid-alt nav__icon'></i>
                            <span class="nav__text">Home</span>
                        </a>
                        <a href="#" className={((isActiveNave === "user") ? 'active' : 'nav__link')} onClick={() =>setNavName("user")}>
                            <i class='bx bx-user nav__icon' ></i>
                            <span class="nav__text">User</span>
                        </a>              
                    </ul>
					</div>
				</nav>
			</div>
			
			<h2>Unete al canal</h2>
        	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Atque optio odio officiis nostrum nesciunt quam libero. 
            Cumque impedit veritatis, quibusdam nulla accusantium illo. 
            In velit laboriosam obcaecati quaerat eaque beatae.</p>
		</div>
	);
};

export default Sidebar;
