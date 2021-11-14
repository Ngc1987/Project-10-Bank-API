import React from 'react'
import "./SignIn.scss"
import { Link } from "react-router-dom"

export default function SignIn() {
	return (
		<div>
		<main className="signInMain bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form>
					<div className="input-wrapper">
						<label for="username">Username</label>
						<input type="text" id="username" />
					</div>
					<div className="input-wrapper">
						<label for="password">Password</label>
						<input type="password" id="password" />
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label for="remember-me">Remember me</label>
					</div>
					 {/* PLACEHOLDER DUE TO STATIC SITE  */}
					<Link to="/user" className="sign-in-button">Sign In</Link>
					 {/* SHOULD BE THE BUTTON BELOW  */}
					<button className="sign-in-button">Sign In</button> 
					
				</form>
			</section>
		</main>
		</div>
	)
}
