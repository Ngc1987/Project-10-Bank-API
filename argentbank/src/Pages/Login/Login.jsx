import React, { useState, useEffect} from 'react'
import "./Login.scss"
import Loader from '../../Components/Loaders/Loader';
import FormLoader from '../../Components/Loaders/FormLoader';
import { Link, useNavigate} from "react-router-dom"
// import {useHistory} from "react"
import axios from 'axios';
// import history from '../../Services/history';

export default function SignIn() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const navigateTo =useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		// console.log(email, password)

		try {
			const config = {
				headers: {
					"Content-type": "application/json"
				}
			}

			setLoading(true)
			const {data} = await axios.post(
				"http://localhost:3001/api/v1/user/login",
				{
					email,
					password,
				},
				config
			)
			console.log(data)
			localStorage.setItem("userInfo", JSON.stringify(data))
			setLoading(false)
			navigateTo("/profile")

		} catch (error) {
			setError(error.response.data.message)
		}
	}

	if(error) {
		console.error(error)
	}
	if(loading) {
		return <Loader />
	}

	return (
		<main className="signInMain bg-dark">
			<section className="sign-in-content">
			{/* {loading && <Loader />} */}
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit} >
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
							onChange={(e) =>setPassword(e.target.value)}
						 />
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label for="remember-me">Remember me</label>
					</div>
					 {/* PLACEHOLDER DUE TO STATIC SITE  */}
					{/* <Link to="/user" className="sign-in-button">Sign In</Link> */}
					 {/* SHOULD BE THE BUTTON BELOW  */}
					<button className="sign-in-button">Sign In</button> 
					<p>Pas encore inscrit ? <Link to="/register" >Inscrivez-vous</Link></p>
					
				</form>
				<div className="formLoader"></div>
			</section>
		</main>
	)
}
