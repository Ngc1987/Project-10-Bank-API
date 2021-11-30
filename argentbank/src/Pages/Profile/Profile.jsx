import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./Profile.scss"
import { getUserInfos, updateProfile } from '../../actions/userActions';
import Loader from '../../Components/Loaders/Loader';

export default function User() {


	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	// const [user, SetUser] = useState()

	const dispatch = useDispatch();
	const userProfile = useSelector((state) => state.userInfos);
	const { loading, error, userInfo } = userProfile;

	const token = JSON.parse(localStorage.getItem("token")).body.token;
	// console.log(userInfo, token)

	// const userData = JSON.parse(localStorage.getItem("userInfo"));
	

	useEffect(() => {
		dispatch(getUserInfos(token));
	}, [dispatch, token])

	// console.log(userProfile.userInfo.body)
	// const {firstName, lastName} = userInfo.body
	const handleChangeNames = async (e) => {
		e.preventDefault();

		dispatch(updateProfile(firstName, lastName, token))
		setIsOpen(false)

	}

	if (error) {
		console.error(error);
	}
	if(loading) {
		return <Loader />
	}

	return (

		
		<main className="userMain bg-dark">

			<form action="" className={isOpen ? "changeUserInfos visible" : "changeUserInfos hidden"}>
				<div className="close" onClick={() => setIsOpen(false)} >X</div>
				<div className="input-wrapper">
					<label htmlFor="username">New First Name</label>
					<input
						type="text"
						id="firstname"
						name="firstname"
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="input-wrapper">
					<label htmlFor="username">New Username</label>
					<input
						type="text"
						id="lastname"
						name="lastname"
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<button onClick={handleChangeNames} className="confirmButton" >Confirm</button>
			</form>


			<div className="header">
				<h1>Welcome back<br />{userInfo.firstName} {userInfo.lastName} !</h1>
				<button className="edit-button" onClick={() => setIsOpen(true)}>Edit Name</button>
			</div>
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>


			
		</main>
	)
}
