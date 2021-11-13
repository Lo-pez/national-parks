import React, { useState } from 'react';
import SearchBar from './search'; 
import FilterActivities from './FilterActivities'


const ActivitiesList = (props) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('Act');
  const [actQuery, setActQuery] = useState(query || '');
  const filteredActivities = FilterActivities(props.activities, actQuery)
  
  return (
    <div>
      <SearchBar
          actQuery={actQuery}
          setActQuery={setActQuery}
      />
      <div className="parksList" names="props.name" parks="props.parks">
        <div className="container">
          <div className="row">
            {filteredActivities.map((act, index) => 
              <div className="col-6 col-md-4" key={index}>
                <button style={{margin:'5px'}}type="button" className="btn btn-outline-dark">{act.name}</button>
              </div>
                )}        
          </div>
        </div>
      </div>
    </div>  
  );
}



export default ActivitiesList;


