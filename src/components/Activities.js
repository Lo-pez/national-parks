import React, { useState, useEffect } from 'react';


const Activities = () => {
	require('dotenv').config()
	const api_key = process.env.REACT_APP_NPS_API;


	const [activities, setActivities] = useState('');

	useEffect(() => {
		fetchActivitiesList();
	}, []);

	const fetchActivitiesList = () => {
		var url = 'https://developer.nps.gov/api/v1/activities?api_key=' + api_key;

		var res = new XMLHttpRequest();
		res.open("GET", url);

		res.setRequestHeader("accept", "application/json");

		res.onreadystatechange = function () {
		   if (res.readyState === 4) {
		      // console.log(res.status);
		      console.log(res.responseText);
		      setActivities(res.responseText)
		   }};
		res.send();
	};
	return (
	null
	)
}

export default Activities
