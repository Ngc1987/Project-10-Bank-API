import React, { useState, useEffect } from 'react'
import "./Register.scss"
import Loader from '../../Components/Loaders/Loader';
import { Link, useNavigate } from "react-router-dom";
// import {useHistory} from "react"
import axios from 'axios';
// import history from '../../Services/history';

export default function Register() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const navigateTo = useNavigate()

	const handleRegister = async (e) => {
		e.preventDefault()
		// console.log(email, password)

		try {
			const config = {
				headers: {
					"Content-type": "application/json"
				}
			}

			setLoading(true)
			const { data } = await axios.post(
				"http://localhost:3001/api/v1/user/signup",
				{
					email,
					password,
					firstName,
					lastName
				},
				config
			)
			console.log(data)
			navigateTo("/signin")
			// localStorage.setItem("userInfo", JSON.stringify(data))
			setLoading(false)

		} catch (error) {
			setError(error.response.data.message)
		}
	}

	if (error) {
		console.error(error)
	}
	if (loading) {
		return <Loader />
	}

	return (
		<main className="signInMain bg-dark">
			<section className="sign-in-content">
				{/* {loading && <Loader />} */}
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Register</h1>
				<form onSubmit={handleRegister} >
					<div className="input-wrapper">
						<label for="username">First Name</label>
						<input
							type="text"
							id="firstname"
							name="firstname"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="input-wrapper">
						<label for="username">Username</label>
						<input
							type="text"
							id="lastname"
							name="lastname"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className="input-wrapper">
						<label for="username">Username</label>
						<input
							type="text"
							id="username"
							name="username"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="input-wrapper">
						<label for="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					{/* <div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label for="remember-me">Remember me</label>
					</div> */}
					{/* PLACEHOLDER DUE TO STATIC SITE  */}
					{/* <Link to="/user" className="sign-in-button">Register</Link> */}
					{/* SHOULD BE THE BUTTON BELOW  */}
					<button className="sign-in-button">Register</button>
					<p>Déjà inscrit ? <Link to="/signin" >Se connecter</Link></p>

				</form>
			</section>
		</main>
	)
}
