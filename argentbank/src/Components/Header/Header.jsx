import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import "./Header.scss";
import { logout } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


/**
 * @component
 * @description Component Header who appears on the top of all pages of the application 
 */
function Header() {

	const dispatch = useDispatch();
	// Check if connected user, to dispatch the good path for the link
	const userInfos = useSelector((state) => state.userInfos);
	const { userInfo } = userInfos;
	const navigateTo = useNavigate();
	// Logout function
	const handleLogout = () => {
		dispatch(logout());
		navigateTo("/");
	}

	// console.log(userInfo)

	return (
		<nav className="header">

			<Link to={userInfo ? "/profile" : "/"}
				className="header-logo">

					<img
						src={process.env.PUBLIC_URL + "/Assets/argentBankLogo.png"}
						alt="Argent Bank Logo" />
					{/* <h1 className="sr-only">Argent Bank</h1> */}

			</Link>

			<div className="header__nav" >

				{userInfo ?
					<>
						
						<p className="header__nav-item" ><FontAwesomeIcon icon={faUserCircle} size="md" /><span>{userInfo.firstName}</span></p>
						
						<Link
							to="/"
							className="header__nav-item"
							onClick={handleLogout}>
							<FontAwesomeIcon icon={faSignOutAlt} size="md" />
							<span>Sign Out</span>
						</Link>
					</>
					:
					<>
						
						<Link
							to="login"
							className="header__nav-item">
							<FontAwesomeIcon icon={faUserCircle} size="lg" />
							<span>Sign In</span>
						</Link>
					</>
				}

			</div>
		</nav>
	)
}

Header.propTypes = {

}

export default Header;