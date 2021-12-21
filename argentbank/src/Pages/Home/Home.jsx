import "./Home.scss";
import React from 'react';


/**
 * @component
 * @description Component Home, who is rended when there is no connected user at path "/". It resume the advantadges of Argent Bank
 */
function Home() {

	return (
		<div>
			<main className="home" >

				<div className="home__banner">

					<section className="home__banner-content">
						<h2 className="sr-only">Promoted Content</h2>
						<p className="subtitle">No fees.</p>
						<p className="subtitle">No minimum deposit.</p>
						<p className="subtitle">High interest rates.</p>
						<p className="text">Open a savings account with Argent Bank today!</p>
					</section>

				</div>

				<section className="home__banner-features">

					<h2 className="sr-only">Features</h2>

					<div className="home__banner-features-item">
						<img src={process.env.PUBLIC_URL + "Assets/icon-chat.png"} alt="Chat Icon" className="home__banner-features-icon" />
						<h3 className="home__banner-features-item-title">You are our #1 priority</h3>
						<p>
							Need to talk to a representative? You can get in touch through our
							24/7 chat or through a phone call in less than 5 minutes.
						</p>
					</div>

					<div className="home__banner-features-item">
						<img
							src={process.env.PUBLIC_URL + "Assets/icon-money.png"}
							alt="Chat Icon"
							className="home__banner-features-icon"
						/>
						<h3 className="home__banner-features-item-title">More savings means higher rates</h3>
						<p>
							The more you save with us, the higher your interest rate will be!
						</p>
					</div>

					<div className="home__banner-features-item">
						<img
							src={process.env.PUBLIC_URL + "Assets/icon-security.png"}
							alt="Chat Icon"
							className="home__banner-features-icon"
						/>
						<h3 className="home__banner-features-item-title">Security you can trust</h3>
						<p>
							We use top of the line encryption to make sure your data and money
							is always safe.
						</p>

					</div>
				</section>
			</main>
		</div>
	)
}

Home.propTypes = {

}

export default Home;