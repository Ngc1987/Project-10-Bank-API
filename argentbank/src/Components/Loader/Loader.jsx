import {Spinner} from 'react-bootstrap';

import React from 'react'

export default function Loader({size = 100}) {
	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			height: "100%"
		}}>
			<Spinner style={{
				width: size,
				height: size
			}} animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	)
}
