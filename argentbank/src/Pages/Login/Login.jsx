import React, { useState, useEffect} from 'react';
import "./Login.scss";
import Loader from '../../Components/Loaders/Loader';
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * @component
 * @description Component SignIn, who is rended when the user click on SignIn (on the header) of the home page.
 */
function SignIn() {

	// Take the user datas from the inputs
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	// console.log(userLogin)
	// Taking these variables from the redux store
	const {loading, error, userInfo} = userLogin;

	const navigateTo = useNavigate();

	// If there is userInfo on our store, we go to profile page
	useEffect(() => {
		if(userInfo) {
			navigateTo("/profile");
		}
	}, [navigateTo, userInfo]);

	// Put the user email and password on our store to connect the user
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

		<main className="form bg-dark">
		
			<section className="form__content">

				<FontAwesomeIcon icon={faUserCircle} size="lg" />
				<h1>Sign In</h1>

				<form onSubmit={handleSubmit} >

					<div className="form__content__input-wrapper">
						<label htmlFor="username">Username</label>
						<input 
							type="text" 
							id="username" 
							name="username"
							onChange={(e) => setEmail(e.target.value)}
							/>
					</div>

					<div className="form__content__input-wrapper">
						<label htmlFor="password">Password</label>
						<input 
							type="password" 
							id="password" 
							name="password"
							onChange={(e) =>setPassword(e.target.value)}
						 />
					</div>

					<div className="form__content__input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>

					<button className="form__content__button">Sign In</button> 
					<p>Not registered ? <Link className="form__content__button-link" to="/register" >Sign up</Link></p>
					
				</form>
			</section>
		</main>
	)
}


SignIn.propTypes = {

}

export default SignIn;