import { useState } from 'react';

const ParksList = (props) => {
    const {parks} = props
    const [MoreInfo, setMoreinfo] = useState(false)



    const DisplayDetails = () => {
      if (MoreInfo) {
        return (
        <div>  	
	        <a className="card-link" href={parks.url} target="_blank" rel="noreferrer">View Park Website</a>
	        <br/>
	        <p className="card-subtitle">Latitude and Longitude</p>
	        <p className="card-description">{parks.latLong}</p>
	        <p className="card-description">{parks.directionsInfo}</p>
	        <a className="card-link" href={parks.directionsUrl}>View park direction</a>
	        <br/>
	        <br/>
				<button onClick={() => setMoreinfo(!MoreInfo)} type="button" className="btn btn-primary">Collapse</button>
    	</div> );
      }
    }

    return (
    <div>
		<div className="card text-center" style={{width: "18rem"}}>
		  <div className="card-body">
		    <h5 className="card-title">{parks.fullName}</h5>
		    <h6 className="card-subtitle mb-2 text-muted">{parks.designation}</h6>
		    <h6 className="card-subtitle mb-2 text-muted">{parks.states}</h6>
		    <p className="card-text">{parks.description}</p>
    		<button onClick={() => setMoreinfo(!MoreInfo)} type="button" className="btn btn-primary">Details</button>
		  </div>
		  {DisplayDetails()}
		</div>
	</div>
    );
}



export default ParksList;

		  // <img className="card-img-top" src={parks.images[1].url} alt="Card image cap"></img>