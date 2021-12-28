import React from 'react';
import PropTypes from 'prop-types';


/**
 * @description Component Transaction, displayed for each transaction of an account
 */
const Transaction = ({title, amount, description}) => {

	return (
		<section className="profile__account">

			<div className="profile__account__wrapper">
				<h3 className="profile__account__title">{title}</h3>
				<p className="profile__account__amount">{amount}</p>
				<p className="profile__account__amount-description">{description}</p>
			</div>

			<div className="profile__account__wrapper cta">
				<button className="profile__account__transaction-button">View transactions</button>
			</div>

		</section>
	)
}

Transaction.propTypes = {
	/**
	 * Title of the transaction
	 */
	title: PropTypes.string.isRequired,
	/**
	 * Amount of the transaction
	 */
	amount: PropTypes.string.isRequired,
	/**
	 * Description of the transaction
	 */
	description: PropTypes.string.isRequired
}

export default Transaction;
