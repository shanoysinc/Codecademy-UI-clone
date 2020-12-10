/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../../assests/svg/codecademy-logo.com.svg";
import notification from "../../assests/svg/notification.svg";
import menu from "../../assests/svg/menu.svg";
import DropDownItems from "./toggleComponent/DropDownItems";
import NotificationItems from "./toggleComponent/NotificationItems";
const NavBar = () => {
	const [showNotification, setShowNotification] = useState(false);
	const [showDropdownItems, setShowDropdownItems] = useState(false);

	const notifToggleHandler = () => {
		const toggle = document.getElementById("navbar__toggle");
		if (toggle.style.display === "block") {
			toggle.style.display = "none";
			setShowNotification(() => false);
		} else {
			setShowNotification(() => true);
			toggle.style.display = "block";
		}
	};
	const menuToggleHandler = () => {
		const toggle = document.getElementById("navbar__toggle");
		const navbar = document.querySelector(".navbar");
		const notificationBtn = document.querySelector(
			".navbar__toggleNofi-btn"
		);

		setShowNotification(() => false);

		if (toggle.style.display === "block") {
			toggle.style.display = "none";
			notificationBtn.style.display = "";

			navbar.style.bottom = null;
			setShowDropdownItems(() => false);
		} else {
			setShowDropdownItems(() => true);
			notificationBtn.style.display = "none";
			toggle.style.display = "block";
			navbar.style.bottom = 0;
		}
	};

	return (
		<div className="navbar">
			<img src={logo} alt="logo" className="navbar__logo" />
			<div className="navbar__icons">
				<button
					onClick={notifToggleHandler}
					className="navbar__toggleNofi-btn "
				>
					<img
						src={notification}
						alt="notification"
						className=" navbar__icon--sml"
					/>
				</button>

				<button
					onClick={menuToggleHandler}
					className="navbar__toggleMenu-btn"
				>
					<img src={menu} alt="menu" className="navbar__icon--sml" />
				</button>
			</div>
			<div id="navbar__toggle">
				{showNotification ? <NotificationItems /> : null}
				{showDropdownItems ? (
					<>
						<div className="navbar__list">
							<DropDownItems />
						</div>
						<button className="dropdown-btn btn">
							Try pro for free
						</button>
					</>
				) : null}
			</div>
		</div>
	);
};

export default NavBar;
