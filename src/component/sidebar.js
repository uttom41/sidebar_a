// Filename - components/Sidebar.js

import React, { useState } from "react";
import styled from "styled-components";
import { Link,Outlet } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./sidebar.css";

const Nav = styled.div`
	background: #15171c;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SidebarNav = styled.nav`
	background: #15171c;
	width: 250px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	transition: 350ms;
	z-index: 10;
`;

const SidebarWrap = styled.div`
	width: 100%;
`;

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);
	const [isActiveNave, setIsactiveNave] = useState("home")

	const showSidebar = () => setSidebar(!sidebar);

	const setNavName = (name) => setIsactiveNave(name);


	return (
		<div className={(sidebar ? 'expander' : 'navBody')} id="navBody">
			<div className={'l-navbar ' + (sidebar ? 'show' : 'undefined')} id="navbar" >
				<nav className="nav">
					<div>
						{/* <a href="#" className="nav__logo">
							<img src="assets/icons/logo.svg" alt="" className="nav__logo-icon" />
							<span className="nav__logo-text">Admin</span>
						</a> */}

						<button onClick={showSidebar} className="nav__toggle">
       						<i className={sidebar ? 'bx bx-chevron-left' : 'bx bx-chevron-right'}></i>
     					</button>

						<ul sidebar={sidebar} class="nav__list">

                        <a href="#" className={'nav__link' + ((isActiveNave === "home") ? 'active' : '')} onClick={ () =>setNavName("home")}>
                            <i class='bx bx-grid-alt nav__icon'></i>
                            <span class="nav__text">Home</span>
                        </a>
                        <a href="#" className={'nav__link' + (isActiveNave === "user" ? 'active' : '')} onClick={() =>setNavName("user")}>
                            <i class='bx bx-user nav__icon' ></i>
                            <span class="nav__text">User</span>
                        </a>              
                    </ul>
					</div>
				</nav>
				 {/* <IconContext.Provider value={{ color: "#fff" }}>
					<Nav className="nav" >
						<NavIcon className="link" to="#">
							<FaIcons.FaBars
								onClick={showSidebar}
							/>
						</NavIcon>
						<h1
							style={{
								textAlign: "center",
								marginLeft: "200px",
								color: "green",
							}}
						>
							GeeksforGeeks
						</h1>
					</Nav>
					<SidebarNav sidebar={sidebar}>
						<SidebarWrap>
							<NavIcon to="#">
								<AiIcons.AiOutlineClose
									onClick={showSidebar}
								/>
							</NavIcon>
							{SidebarData.map((item, index) => {
								return (
									<SubMenu
										item={item}
										key={index}
									/>
								);
							})}
						</SidebarWrap>
					</SidebarNav>
				</IconContext.Provider>  */}
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
