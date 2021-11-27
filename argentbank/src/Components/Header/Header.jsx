import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./Header.scss"



export default function Header() {

	const userInfo = localStorage.getItem("userInfo");

	const navigateTo = useNavigate()
	return (
		<nav className="main-nav">
			<Link to="/" className="main-nav-logo" href="./index.html">
				<img
					className="main-nav-logo-image"
					src={process.env.PUBLIC_URL + "/Assets/argentBankLogo.png"}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>

			{
				userInfo ? 
						<Link to="/" className="main-nav-item" href="./sign-in.html"
						onClick={() => {
							localStorage.removeItem("userInfo");
							navigateTo("/")
						}}
						>
							<i className="fa fa-user-circle"></i>
							Log out
						</Link>
						:
						<Link to="login" className="main-nav-item">
							<i className="fa fa-user-circle"></i>
							Sign In
						</Link>
			}
				
			</div>
		</nav>
	)
}
