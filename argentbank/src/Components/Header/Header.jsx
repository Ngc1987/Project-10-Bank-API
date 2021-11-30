import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"
import "./Header.scss";
import { logout } from '../../actions/userActions';

export default function Header() {

	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const navigateTo = useNavigate();
	// LogOut function
	const handleLogout = () => {
		dispatch(logout());
		navigateTo("/");
	}

	return (
		<nav className="main-nav">
			<Link to="/" 
				className="main-nav-logo">
				<img className="main-nav-logo-image"
					 src={process.env.PUBLIC_URL + "/Assets/argentBankLogo.png"}
					 alt="Argent Bank Logo"/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				{userInfo ? <Link 
							to="/" 
							className="main-nav-item"
							onClick={handleLogout}>
							<i className="fa fa-user-circle"></i>
							Log out
							</Link>
						  :
							<Link 
							to="login" 
							className="main-nav-item">
							<i className="fa fa-user-circle"></i>
							Sign In
							</Link>
				}
			</div>
		</nav>
	)
}
