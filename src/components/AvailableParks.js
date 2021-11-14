import React, { useState } from 'react';


const ActivitiesList = (props) => {

	const GetParks = () => {
		console.log("Hello world")
	}

  return (
  	<div>
      <div className="parksList" names="props.name" parks="props.parks">
        <div className="container">
          <div className="row">
            {props.ActivitiesData.map((act, index) => 
              <div className="col-6 col-md-4" key={index}>
                <button onClick={GetParks}style={{margin:'5px'}} className="btn btn-info" type="button" aria-haspopup="true" aria-expanded="false">
                  {act.name}
                </button>
              </div>
                )}        
          </div>
        </div>
      </div>
    </div>
  );
}



export default ActivitiesList;

