import React, {useState} from 'react'
import Information from './Information'
import './Home.css'

const Home = () => {
	const data = [{
			name: "Yogi park",
			image: 
				"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
			text: "test",
		},
		{
			name: "Two Yogi park",
			image: 
				"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
			text: "test1",	
		},
		{
			name: "Three Yogi park",
			image: 
				"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
			text: "test2",
		},
		{
			name: "Four Yogi park",
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

		const locationChangeHandler = (event) => {
			setLocation(event.target.value);
		}
		const activityChangeHandler = (event) => {
			setActivity(event.target.value);
		}


	return (
	    <div>
			<div className="container">
				<div className="newInformation">
					<label>Search for an activity</label>
					<input type="text" className="field" placeholder="Enter an activity..." 
					activity-search onChange={activityChangeHandler}></input>
				</div>
					<button onClick={newInformationHandler}>Add info</button>
					{informations.map((location) => (
					<Information 
					name={location.name} 
					image={location.image} 
					text={location.text}
					/>
				))}
			</div>
		</div>
	);
};

export default Home
