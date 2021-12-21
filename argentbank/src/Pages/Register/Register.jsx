import React, { useEffect, useState} from 'react';
// Same css of Login component
import "../Login/Login.scss";
import Loader from '../../Components/Loaders/Loader';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


/**
 * @component
 * @description Component Register, who is rended when the user click on "register" on the SignIn form.
 */
function Register() {
	// Take the datas from the inputs
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const navigateTo = useNavigate();
	const dispatch = useDispatch();
	const userRegister = useSelector((state) => state.userRegister);
	// Taking these variables from the redux store
	const { loading, error, userInfo} = userRegister;

	// If there is userInfo on our store, we go to profile page
	useEffect(() => {
		if (userInfo) {
			navigateTo("/profile");
		}
	}, [navigateTo, userInfo])
	
	// Put the user email, lastName, firstName and password on our store to connect the user
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

		<main className="form bg-dark">

			<section className="form__content">

				<FontAwesomeIcon icon={faUserCircle} size="lg" />
				<h1>Register</h1>

				<form onSubmit={handleRegister} >

					<div className="form__content__input-wrapper">
						<label htmlFor="username">First Name</label>
						<input
							type="text"
							id="firstname"
							name="firstname"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>

					<div className="form__content__input-wrapper">
						<label htmlFor="username">Last name</label>
						<input
							type="text"
							id="lastname"
							name="lastname"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>

					<div className="form__content__input-wrapper">
						<label htmlFor="username">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="form__content__input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<button className="form__content__button">Register</button>
					<p>Already registered ? <Link className="form__content__button-link" to="/login" >Log in</Link></p>

				</form>
			</section>
		</main>
	)
}

Register.propTypes = {

}

export default Register;