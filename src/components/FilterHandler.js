import { useState } from 'react';
import SearchBar from './search'; 
import FilterActivities from './FilterActivities';
import ParksList from './ParksList'
import ActivitiesList from './ActivitiesList'


const FilterHandler = (props) => {
	const { search } = window.location;
	const query = new URLSearchParams(search).get('Act');
	const [actQuery, setActQuery] = useState(query || '');

	const FilteredActivities = FilterActivities(props.activities, actQuery);

	const ActivitiesElement = 	        
		FilteredActivities.map((act, index) =>{
	            return(
	                <ActivitiesList key={index} activities={act}/>
	            )
	        });

	const ParksElement = 
		props.parks.map((park, index) =>{
	            return(
	                <ParksList key={index} parks={park}/>
	            )
	        });

  return (
    <div>
      <SearchBar
          actQuery={actQuery}
          setActQuery={setActQuery}
      />
   	<div className="row" style={{padding:"10px"}}>
    	{ActivitiesElement}
    </div>
	<div className="card-columns">
    	{ParksElement}
    </div>
    </div>  
  );
}



export default FilterHandler;