import React, { useState } from 'react';


const ActivitiesList = (props) => {

	const GetParks = () => {
		console.log("Hello world")
	}

  return (
  	<div>
      <div className="activitiesList" names="props.name" parks="props.parks">
        <div className="container">
          <div className="row">
            {props.ActivitiesData.map((act, index) => 
              <div className="" key={index}>
                <a href="/parks" style={{margin:'2px'}}role="button" className="btn btn-dark" variant="contained" aria-haspopup="true" aria-expanded="false">{act.name}</a>
              </div>
                )}        
          </div>
        </div>
      </div>
    </div>
  );
}



export default ActivitiesList;
