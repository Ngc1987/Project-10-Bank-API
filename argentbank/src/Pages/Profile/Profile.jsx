import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./Profile.scss"
import { getUserInfos, updateProfile } from '../../actions/userActions';
import Loader from '../../Components/Loaders/Loader';
import Error from '../../Components/Error404/Error';

/**
 * @description Component User, who is rended when the user successully connected. It show names of the user, some transactions, and a function to change first name or last name of the user
 * 
 * @component
 */
function User() {

	const dispatch = useDispatch();

	// Take the user datas on our redux store to show informations on the component
	const userProfile = useSelector((state) => state.userInfos);
	const { loading, error, userInfo } = userProfile;

	// Set the state to show first name and last name of the user
	const [firstName, setFirstName] = useState(userInfo?.firstName ?? "");
	const [lastName, setLastName] = useState(userInfo?.lastName ?? "");

	// Set if the div element with the inputs to change lat and first name of the user is open
	const [isOpen, setIsOpen] = useState(false);

	// Take the token from the local storage
	const token = JSON.parse(localStorage.getItem("token")).body.token;

	// Fetch the user datas with the token from the local storage
	useEffect(() => {
		dispatch(getUserInfos(token));
	}, [dispatch, token])

	// Put the new user datas on our redux store when the user change it
	const handleChangeNames = async (e) => {
		e.preventDefault();
		dispatch(updateProfile(firstName, lastName, token))
		setIsOpen(false)
	}

	if (error) {
		console.error(error);
		return <Error />
	}
	if(loading) {
		return <Loader />
	}

	return (
		
		<main className="profile">

			<div className="profile__header">

				<h1>Welcome back<br />{userInfo?.firstName ?? ""} {userInfo?.lastName ?? ""} !</h1>
				<button className={isOpen ? "profile__header__edit-button hidden" : "profile__header__edit-button visibleButton"} 
						onClick={() => setIsOpen(true)} >Edit Name</button>
			</div>

			<form action="" className={isOpen ? "profile__updateUser visible" : "profile__updateUser hidden"}>

				<div className="profile__updateUser__input-wrapper">

					<input
						type="text"
						id="firstname"
						name="firstname"
						placeholder={userInfo?.firstName ?? ""}
						onChange={(e) => setFirstName(e.target.value)}
					/>

				</div>

				<div className="profile__updateUser__input-wrapper">

					<input
						type="text"
						id="lastname"
						name="lastname"
						placeholder={userInfo?.lastName ?? ""}
						onChange={(e) => setLastName(e.target.value)}
						// value={userInfo?.lastName ?? ""}
					/>
				</div>

				<div onClick={handleChangeNames} 
					 className="profile__updateUser__confirmButton" >Save</div>
				<div onClick={() => setIsOpen(false)}  
					 className="profile__updateUser__confirmButton" >Cancel</div>
					 
			</form>

			<section className="profile__account">

				<div className="profile__account__wrapper">
					<h3 className="profile__account__title">Argent Bank Checking (x8349)</h3>
					<p className="profile__account__amount">$2,082.79</p>
					<p className="profile__account__amount-description">Available Balance</p>
				</div>

				<div className="profile__account__wrapper cta">
					<button className="profile__account__transaction-button">View transactions</button>
				</div>

			</section>

			<section className="profile__account">

				<div className="profile__account__wrapper">
					<h3 className="profile__account__title">Argent Bank Savings (x6712)</h3>
					<p className="profile__account__amount">$10,928.42</p>
					<p className="profile__account__amount-description">Available Balance</p>
				</div>
				<div className="profile__account__wrapper cta">
					<button className="profile__account__transaction-button">View transactions</button>
				</div>

			</section>

			<section className="profile__account">

				<div className="profile__account__wrapper">
					<h3 className="profile__account__title">Argent Bank Credit Card (x8349)</h3>
					<p className="profile__account__amount">$184.30</p>
					<p className="profile__account__amount-description">Current Balance</p>
				</div>

				<div className="profile__account__wrapper cta">
					<button className="profile__account__transaction-button">View transactions</button>
				</div>

			</section>

		</main>
	)
}

User.propTypes = {

}

export default User;