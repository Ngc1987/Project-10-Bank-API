import React, { useState} from 'react';
// Same css of Login component
import "../Login/Login.scss";
import Loader from '../../Components/Loaders/Loader';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { register} from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "./Register.scss"


/**
 * Register, who is rended when the user click on "register" on the SignIn form.
 * @component
 * 
 */
function Register() {
	// Take the datas from the inputs
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	// State to show the confirmation modale when user is created
	const [showModale, setShowModale] = useState(false);

	const navigateTo = useNavigate();
	const dispatch = useDispatch();
	const userRegister = useSelector((state) => state.userRegister);

	// Taking these variables from the redux store
	const { loading, error} = userRegister;

	// Put the user email, lastName, firstName and password on our store to connect the user
	const handleShowModale = (e) => {
		e.preventDefault();
		setShowModale(true)
	}
	
	const handleRegister = (e) => {
		e.preventDefault();
		dispatch(register(firstName, lastName, email, password));
		navigateTo("/login");
	}

	if (error) {
		console.error(error);
	}
	if (loading) {
		return <Loader />;
	}

	return (

		<main className="form bg-dark">

		{showModale && 
				<div className="confirmSignUpModale">
					<p>
						Votre compte a été créé avec succès. Veuillez vous connecter pour y accéder.
					</p>
					<button onClick={(e) => handleRegister(e)} >OK</button>
				</div>
		}

			<section className="form__content">

				<FontAwesomeIcon icon={faUserCircle} size="lg" />
				<h1>Register</h1>

				<form onSubmit={(e) =>handleShowModale(e)} >

					<div className="form__content__input-wrapper">
						<label htmlFor="firstname">First Name</label>
						<input
							type="text"
							id="firstname"
							name="firstname"
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>

					<div className="form__content__input-wrapper">
						<label htmlFor="lastname">Last name</label>
						<input
							type="text"
							id="lastname"
							name="lastname"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>

					<div className="form__content__input-wrapper">
						<label htmlFor="email">Email</label>
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