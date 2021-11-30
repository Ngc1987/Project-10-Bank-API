import React, { useEffect, useState} from 'react';
import "./Register.scss";
import Loader from '../../Components/Loaders/Loader';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';

export default function Register() {
	// Take the datas from the inputs
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const navigateTo = useNavigate();
	const dispatch = useDispatch();
	const userRegister = useSelector((state) => state.userRegister);
	const { loading, error, userInfo} = userRegister;

	useEffect(() => {
		if (userInfo) {
			navigateTo("/profile");
		}
	}, [navigateTo, userInfo])
	
	const handleRegister = async (e) => {
		e.preventDefault();
		dispatch(register(firstName, lastName, email, password));
	}

	if (error) {
		console.error(error);
	}
	if (loading) {
		return <Loader />;
	}

	return (
		<main className="signInMain bg-dark">
			<section className="sign-in-content">
				{/* {loading && <Loader />} */}
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Register</h1>
				<form onSubmit={handleRegister} >
					<div className="input-wrapper">
						<label htmlFor="username">First Name</label>
						<input
							type="text"
							id="firstname"
							name="firstname"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="lastname"
							name="lastname"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							name="username"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
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
					<p>Already registered ? <Link className="formLink" to="/login" >Log in</Link></p>

				</form>
			</section>
		</main>
	)
}
