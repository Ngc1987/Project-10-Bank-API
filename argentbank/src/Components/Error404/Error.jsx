import React from 'react';
import "./Error404.scss";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


/**
 * @component
 
 * @description Component Error who appears when the datas are fetched and an error is occured 
 */
function Error() {

	// Check if connected user, to dispatch the good path for the link
	const userInfos = useSelector((state) => state.userInfos);
	const { userInfo } = userInfos;

	return (
		<section className="error404">

			<>
				<p className="error404__number">404</p>
				<div className="error404__phrase">
					<p>Oups ! La page que </p>
					<p>vous demandez n'existe pas</p>
				</div>
			</>

			<Link to={userInfo ? "/profile" : ""} >
				<p className="error404__homeLink">Retourner sur la page d'accueil</p>
			</Link>

		</section>
	)
}

Error.propTypes = {

}

export default Error;