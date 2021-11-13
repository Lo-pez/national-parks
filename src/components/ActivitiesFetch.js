import React, { useEffect, useState, useCallback } from 'react';
import ActivitiesCard from './ActivitiesCard';

import axios from 'axios';

function ActivitiesFetch() {
	require('dotenv').config()
	const [activities, setActivities] = useState(['']);

	const api_key = '?api_key=' + process.env.REACT_APP_NPS_API;
    const api_root ='https://developer.nps.gov/api/v1/';
    const category = 'activities/parks';

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = useCallback(() => {
		axios.get(api_root + category + api_key)
			.then(res => {
				setActivities(res.data.data);
			})
	}, [api_root, category, api_key]);
	
const element = 
	<ActivitiesCard 
		activities = {activities}
	/>;

	return (
		<div className="container" name="activities.name" id="activities.id" parks="parks">
    		{element}
		</div>
		)
	}


export default ActivitiesFetch;