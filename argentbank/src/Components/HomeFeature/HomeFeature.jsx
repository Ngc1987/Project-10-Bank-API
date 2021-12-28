import React from 'react';
import PropTypes from 'prop-types';


/**
 * @description Component HomeFeature, displayed on the Home component to show some basics informations of the Bank
 */
const HomeFeature = ({imgSrc, imgAlt, title, content}) => {
	return (

		<div className="home__banner-features-item">
			<img src={imgSrc} alt={imgAlt} className="home__banner-features-icon" />
			<h3 className="home__banner-features-item-title">{title}</h3>
			<p>{content}</p>
		</div>
	)
}

HomeFeature.propTypes = {
	/**
	 * Source of the image to display
	 */
	imgSrc: PropTypes.string.isRequired,
	/**
	 * Alt description of the image to display
	 */
	imgAlt: PropTypes.string.isRequired,
	/**
	 * Title of the Feature who need to be displayed
	 */
	title: PropTypes.string.isRequired,
	/**
	 * Content of the description of the featuree
	 */
	content: PropTypes.string.isRequired,
}

export default HomeFeature;
