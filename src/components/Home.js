import React, {useState} from 'react'
import Information from './Information'
import './Home.css'
import FetchFromAPI from './FetchFromAPI'

function Home() {
	const data = [{
			id: "1",
			name: "park 1",
			image: 
				"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
			text: "test",
		},
		{
			id: "2",			
			name: "park 2",
			image: 
				"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
			text: "test1",	
		},
		{

			id: "3",
			name: "park 3",
			image: 
				"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
			text: "test2",
		},
		{
			id: "4",
			name: "park 4",
			image: 
				"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
			text: "test3",
		},
		];
		const [informations, setInformation] = useState(data);
		const [location, setLocation] = useState('');
		const [activity, setActivity] = useState('');

		const newInformationHandler = () => {
			// Search API for activity/display a list of activities dropdown or locations
		    setInformation([{ name: location, image: activity }, ...informations]);
		    setActivity("");
		    setLocation("");
		}

		// const locationChangeHandler = (event) => {
		// 	setLocation(event.target.value);
		// }
		const activityChangeHandler = (event) => {
			setActivity(event.target.value);
		}

		 const listItems = informations.map((location) =>
			<Information 
			key = {location.id.toString()}
			name={location.name} 
			image={location.image} 
			text={location.text}
			/>
		 );


	return (
	    <div>
			<div className="container">
				<div className="newInformation">
					<label>Search for an activity</label>
					<form className="form-inline my-2 my-lg-0">
		      			<input className="form-control mr-sm-2" type="search" onChange={activityChangeHandler} placeholder="Enter an activity..." aria-label="Search"></input>
		      			<button onClick={newInformationHandler}>Search</button>
		    		</form>
				</div >
					{listItems}
					<FetchFromAPI category="activities/parks"/>
			</div>
		</div>
	);
};

export default Home
