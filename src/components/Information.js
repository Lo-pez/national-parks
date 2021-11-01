import React from "react"
import './Information.css'

const Information = (props) => {
	return (
		<div className="feature">
			<h2>{props.name}</h2>
			<img src={props.image} alt="NPS location"></img>
			<p>{props.text}</p>
		</div>
	)
}

export default Information