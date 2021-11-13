import React from "react"
import './Information.css'

function Information(props) {
	return (
		<div className="feature" text={props.text} image={props.image} name={props.name}>
			<h2>{props.name}</h2>
			<img src={props.image} alt="NPS location"></img>
			<p>{props.text}</p>
		</div>
	)
}

export default Information	