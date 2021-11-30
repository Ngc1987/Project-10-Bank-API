import React, { useState, useEffect} from 'react';
import "./Login.scss";
import Loader from '../../Components/Loaders/Loader';
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';


export default function SignIn() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const {loading, error, userInfo} = userLogin;

	const navigateTo = useNavigate();

	useEffect(() => {
		if(userInfo) {
			navigateTo("/profile");
		}
	}, [navigateTo, userInfo]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	}

	if(error) {
		console.error(error);
	}
	if(loading) {
		return <Loader />;
	}

	return (
		<main className="signInMain bg-dark">
			<section className="sign-in-content">
			{/* {loading && <Loader />} */}
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit} >
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
							onChange={(e) =>setPassword(e.target.value)}
						 />
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button className="sign-in-button">Sign In</button> 
					<p>Not registered ? <Link className="formLink" to="/register" >Sign up</Link></p>
					
				</form>
				<div className="formLoader"></div>
			</section>
		</main>
	)
}
