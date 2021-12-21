import "./Loader.scss";
import React from 'react';

/**
 * @component
 * @description Component Loader who appears on sign in during the data fetching before to show the profile component
 */
function Loader() {
	return (

		<div className="loader">

			<div className="loader__image">

				<div className="loader__coin">
					<img src="https://www.dropbox.com/s/fzc3fidyxqbqhnj/loader-coin.png?raw=1" alt=""/>
				</div>

				<div className="loader__hand">
					<img src="https://www.dropbox.com/s/y8uqvjn811z6npu/loader-hand.png?raw=1" alt=""/>
				</div>

			</div>

		</div>
	)
}

Loader.propTypes = {

}

export default Loader;