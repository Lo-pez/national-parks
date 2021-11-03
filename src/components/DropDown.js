import React from "react"

function Dropdown() {
	return (
	<div>
		<li className="nav-item dropdown">
			<a className="nav-link dropdown-toggle" href="_blank" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			  Dropdown
			</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown">
					  <a className="dropdown-item" href="_blank">Action</a>
					  <a className="dropdown-item" href="_blank">Another action</a>
					  <div className="dropdown-divider"></div>
					  <a className="dropdown-item" href="_blank">Something else here</a>
				</div>
		</li>
	</div>
	)
}

export default DropDown
