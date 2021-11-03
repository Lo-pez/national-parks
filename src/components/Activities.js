import React, { useState, useEffect, useCallback } from 'react';


function Activities() {
	require('dotenv').config()
	const api_key = process.env.REACT_APP_NPS_API;


	const [activities, setActivities] = useState('');


	const fetchActivitiesList = useCallback(() => {
		var url = 'https://developer.nps.gov/api/v1/activities?api_key=' + api_key;

		var res = new XMLHttpRequest();
		res.open("GET", url);

		res.setRequestHeader("accept", "application/json");
		setActivities(res.responseText)

		res.onreadystatechange = function () {
		   if (res.readyState === 4) {
		      // console.log(res.status);
		      // console.log(res.responseText);
		      setActivities(res.responseText)
		   }};
		// res.send();
		return res.responseText;
	}, [api_key],
	);

	useEffect(() => {
		fetchActivitiesList();
	}, [fetchActivitiesList]);

	return (
		<div>{activities}</div>
	)
}

export default Activities
