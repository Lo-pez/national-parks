import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import FilterHandler from './FilterHandler'


function FetchHandler() {
	// require('dotenv').config()
    const [fetching,setFetching] = useState(true);
	const [activities, setActivities] = useState(['']);
	const [parks, setParks] = useState(['']);
	// const [webcams, setWebcams] = useState(['']);

	const api_key = '?limit=496&api_key=' + process.env.REACT_APP_NPS_API;
    const api_root ='https://developer.nps.gov/api/v1/';
    const activities_category = 'activities';
    const parks_category = 'parks';
    // const webcam_category = 'webcams'

	const ActivitiesRequest = axios.get(api_root + activities_category + api_key);
	const ParksRequest = axios.get(api_root + parks_category + api_key);
	// const WebcamRequest = axios.get(api_root + webcam_category + api_key)

	const fetchData = useCallback(() => {
		setFetching(true);
		axios.all([ActivitiesRequest, ParksRequest])
		.then(axios.spread((...responses) => {
		  setActivities(responses[0].data.data)
		  setParks(responses[1].data.data)
		  // setWebcams(responses[2].data)
		})).catch(errors => {
		  console.log(errors)
		  console.log(fetching)
		})
		setFetching(false);
	}, [ActivitiesRequest, ParksRequest, fetching]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	
		const ParksAndActivitiesElement = 
		<FilterHandler
			activities = {activities}
			parks =	{parks}
		/>;
		 // console.log(webcams)

	return (
		<div className="container">
			{ParksAndActivitiesElement}
		</div>
	);
};


export default FetchHandler;


