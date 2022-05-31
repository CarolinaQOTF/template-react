import React from "react";

//include images into your bundle

import Luces from "./TrafficLight.jsx";

//create your first component
const Home = () => {
	return (
		<div className=" back">
			<Luces />
		</div>
	);
};

export default Home;
