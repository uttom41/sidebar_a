// Filename - components/Sidebar.js

import React, { useState } from "react";
import { Link,Outlet } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

import "./sidebar.css";


const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);
	const [isActiveNave, setIsactiveNave] = useState("home")

	const showSidebar = () => setSidebar(!sidebar);

	const setNavName = (name) => setIsactiveNave(name);

	const ArrowIcon = sidebar?IoIosArrowForward:IoIosArrowBack;


	return (
		<div className={(sidebar ? 'expander' : 'navBody')}>
			<div className={(sidebar ? 'expanderHeader' : 'header')}>
				<h1>Header showing</h1>
			</div>
			<div className={'l-navbar ' + (sidebar ? 'show' : 'undefined')} >
				<nav className="nav">
					<div>
						<div class="profile">
							<img className= {sidebar? "profilePic": "profilePicExpend"} src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture"/>
							 <h3 style={{
								visibility: sidebar ? 'visible' : 'hidden',
								opacity: sidebar ? 1 : 0,
								transition: 'visibility 0s linear 0.33s, opacity 0.33s linear'
								}}>Anamika Roy
							</h3>
							<p  style={{
								visibility: sidebar ? 'visible' : 'hidden',
								opacity: sidebar ? 1 : 0,
								transition: 'visibility 0s linear 0.33s, opacity 0.33s linear'
								}}>Designer
							</p>
						</div>

						<button onClick={showSidebar} className="nav__toggle rotate" >
       						<ArrowIcon style={{ color: 'white', fontSize: '24px' }}  />
     					</button>

						<ul sidebar={sidebar} class="nav__list">

							<Link  className={((isActiveNave === "home") ? 'active' : 'nav__link')} onClick={ () =>setNavName("home")}>
								<IoHomeOutline className={sidebar ? 'nav__icon':' nav__icon_small'} size={32}/>
								{sidebar && <span className="nav__text">Home</span>}
							</Link>
							<Link className={((isActiveNave === "user") ? 'active' : 'nav__link')} onClick={() =>setNavName("user")}>
								<FaRegUser className= {sidebar ? 'nav__icon':' nav__icon_small'} size={32}/>
								{sidebar &&<span className="nav__text">User</span>}
							</Link>              
                    	</ul>
					</div>
				</nav>

			</div>
			<div className="widgetBody">
				<h2>Unete al canal</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
				Atque optio odio officiis nostrum nesciunt quam libero. 
				Cumque impedit veritatis, quibusdam nulla accusantium illo. 
				In velit laboriosam obcaecati quaerat eaque beatae.</p>
			</div>
			
		</div>
	);
};

export default Sidebar;
