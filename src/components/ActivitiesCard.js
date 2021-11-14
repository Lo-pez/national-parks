import React, { useState } from 'react';
import SearchBar from './search'; 
import FilterActivities from './FilterActivities'
import AvailableParks from './AvailableParks'


const ActivitiesList = (props) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('Act');
  const [actQuery, setActQuery] = useState(query || '');
  const filteredActivities = FilterActivities(props.activities, actQuery)
  
  const ActivitiesElement =       <AvailableParks ActivitiesData={filteredActivities} />;
  return (
    <div>
      <SearchBar
          actQuery={actQuery}
          setActQuery={setActQuery}
      />
      {ActivitiesElement}
    </div>  
  );
}



export default ActivitiesList;


