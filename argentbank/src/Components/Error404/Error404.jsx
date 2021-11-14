import React, { Component } from 'react'
import "./Error404.scss"
import { Link } from 'react-router-dom'

export default class Error404 extends Component {
	render(props) {

		// console.log(this.props)
		return (
			<section className="error404">

			{this.props.type === "fetchError" ?
			
				<>
					<p className="error404__number">431</p>
					<div className="error404__phrase">
						<p>Nous ne parvenons pas actuellement à récupérer les données.</p>
						<p>Vous pouvez réessayer dans quelques minutes..</p>
					</div>
				</>
			:
				<>
					<p className="error404__number">404</p>
					<div className="error404__phrase">
						<p>Oups ! La page que </p>
						<p>vous demandez n'existe pas</p>
					</div>
				</>
			}
			<Link to="/" >
				<p  className="error404__homeLink">Retourner sur la page d'accueil</p>
				</Link>
			</section>
		)
	}
}
