import React from 'react'
import { Link } from "react-router-dom"
import "./Header.scss"



export default function Header() {
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
				<Link to="signin" className="main-nav-item" href="./sign-in.html">
					<i className="fa fa-user-circle"></i>
					Sign In
				</Link>
			</div>
		</nav>
	)
}
