import React from "react"

const searchBtn = document.getElementById('activity-search');

const Script = () => {
	const onActivitySearch = () => {
		axios.get("https://developer.nps.gov/api/v1/activities?", {
	      params: {
	        query: input,
	      },
	      headers: {
	        Authorization: "",
	      },
	    });
  	}

export default Script
