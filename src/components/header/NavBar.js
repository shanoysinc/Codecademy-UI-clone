import React from "react";
import logo from "../../assests/svg/codecademy-logo.com.svg";
import notification from "../../assests/svg/notification.svg";
import menu from "../../assests/svg/menu.svg";

const NavBar = () => {
	return (
		<div className="navbar">
			<img src={logo} alt="logo" className="navbar__icon" />
			<div className="move-right">
				<img
					src={notification}
					alt="notification"
					className=" navbar__icon--sml"
				/>
				<img src={menu} alt="menu" className="navbar__icon--sml" />
			</div>
		</div>
	);
};

export default NavBar;
