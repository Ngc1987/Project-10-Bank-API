import "./Home.scss";
import React from 'react';
import HomeFeature from "../../Components/HomeFeature/HomeFeature";


/**
 * @description Component Home, who is rended when there is no connected user at path "/". It resume the advantadges of Argent Bank
 * 
 * @category Component
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

					<HomeFeature imgSrc={process.env.PUBLIC_URL + 					"Assets/icon-chat.png"}
								imgAlt="Chat Icon"
								title="You are our #1 priority"
								content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
						 />
					<HomeFeature imgSrc={process.env.PUBLIC_URL + 					"Assets/icon-money.png"}
								imgAlt="Chat Icon"
								title="You are our #1 priority"
								content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
						 />
					<HomeFeature imgSrc={process.env.PUBLIC_URL + 					"Assets/icon-security.png"}
								imgAlt="Dollar Icon"
								title="Security you can trust"
								content="We use top of the line encryption to make sure your data and money
								is always safe."
						 />
				</section>
			</main>
		</div>
	)
}

Home.propTypes = {

}

export default Home;