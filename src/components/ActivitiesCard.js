import React from 'react';

const ActivitiesCard = (props) => {
  console.log(props.activities);
  return (
    <div className="parksList" names="props.name" parks="props.parks">
      <div className="container">
        <div className="row">
          {props.activities.map((act, index) => 
            <div className="column" key={index}>
              <button style={{margin:'5px'}}type="button" className="btn btn-outline-dark">{act.name}</button>
            </div>
              )}        
        </div>
      </div>
    </div>  
  );
}



export default ActivitiesCard;


