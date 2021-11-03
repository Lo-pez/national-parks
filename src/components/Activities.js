import React, { useState, useEffect, useCallback } from 'react';


function Activities() {
	require('dotenv').config()
	const api_key = process.env.REACT_APP_NPS_API;
	const [loading, setLoading] = useState(false);


	const [activities, setActivities] = useState([]);


	const fetchActivitiesList = useCallback(() => {
		var url = 'https://developer.nps.gov/api/v1/activities?api_key=' + api_key;

		var res = new XMLHttpRequest();
		res.open("GET", url);
		res.responseType = 'json';

		res.setRequestHeader("accept", "application/json");
		// setActivities(res.responseText)

		res.onreadystatechange = function () {
		   if (res.readyState === 4) {
		      // console.log(res.status);
		      console.log('response', this.response.data);
		      setActivities(this.response.data);
		   }};
		res.send();
	}, [api_key],
	);

	useEffect(() => {
		setLoading(true);
		fetchActivitiesList()
		setLoading(false);
	}, [fetchActivitiesList]);

  if (loading) {
    return <p>Data is loading...</p>;
  }

	return (
		<div>
        {activities.map((act, index) => (
          <div key={index}>
            <h2>{act.name}</h2>
          </div>
        ))}
		</div>
	)
}

export default Activities
