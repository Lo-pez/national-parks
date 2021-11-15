import React, { useState } from 'react';


const Parks = (props) => {

	const GetParks = () => {
		console.log("Hello world")
	}

  return (
  	<div>
      <div className="activitiesList" names="props.name" parks="props.parks">
        <div className="container">
          <div className="row">
              <div className="col-6 col-md-4">
                <a href="/parks" style={{margin:'5px'}} role="button" className="btn btn-dark" aria-haspopup="true" aria-expanded="false">Dude is perfect</a>
              </div>    
          </div>
        </div>
      </div>
    </div>
  );
}



export default Parks;
