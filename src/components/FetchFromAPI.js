import React, { useState, useEffect, useCallback } from 'react';


function FetchFromAPI( { category } ) {
	require('dotenv').config()
	const api_key = process.env.REACT_APP_NPS_API;
	const [loading, setLoading] = useState(false);


	const [jsonData, setJsonData] = useState([]);


	const fetchData = useCallback(() => {
		var url = 'https://developer.nps.gov/api/v1/' + category + '?api_key=' + api_key;

		var res = new XMLHttpRequest();
		res.open("GET", url);
		res.responseType = 'json';

		res.setRequestHeader("accept", "application/json");
		// setActivities(res.responseText)

		res.onreadystatechange = function (){
		   if (res.readyState === 4) {
		      // console.log(res.status);
		      console.log('response', this.response.data);
		      setJsonData(this.response.data);
		   }};
		res.send();
	}, [api_key, category],
	);

	useEffect(() => {
		setLoading(true);
		fetchData()
		setLoading(false);
	}, [fetchData]);

  if (loading) {
    return <p>Data is loading...</p>;
  }

	return (
		<div>
			{JSON.stringify(jsonData, null, 2)}
		</div>
	)
}

export default FetchFromAPI