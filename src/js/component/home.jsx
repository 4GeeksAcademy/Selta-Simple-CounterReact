import React, { useState, useEffect} from "react";
import SimpleCounter from "./simplecounter";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [counter, setCounter] = useState (0);

	useEffect (() => {
		const interval = setInterval ( () => {
			setCounter (counter => counter + 1)
		} ,1000 )

		return () => clearInterval (interval)
	}, [counter] )

	function calculateSeconds (secondCounter, placeValue) {
		return Math.floor(secondCounter / placeValue) % 10
	}
	
	return (
		<>
		<SimpleCounter 
		oneDigit = {calculateSeconds(counter, 100000)}
		twoDigit = {calculateSeconds(counter, 10000)}
		threeDigit = {calculateSeconds(counter, 1000)}
		fourDigit = {calculateSeconds(counter, 100)}
		fiveDigit = {calculateSeconds(counter, 10)}
		sixDigit = {calculateSeconds(counter, 1)}

		/>

		</>
	);
};

export default Home;
