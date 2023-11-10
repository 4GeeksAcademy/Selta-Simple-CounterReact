import React, { useState, useEffect} from "react";
import SimpleCounter from "./simplecounter";
import Functionality from "./functionality";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {

	const [counter, setCounter] = useState (0);
	const [isActive,setIsActive] = useState(false)
	
	let timer;
	
	const handleStart = () => {
	  setCounter(counter + 1);
	   setIsActive(true)
	};
  
	const handleStop = () => {
		clearTimeout(timer);
	};
	const handlereset = () => {
	  setCounter(0);
	  clearTimeout(timer);
	};
	useEffect(() => {
		if (counter) {
		  timer = setTimeout(handleStart, 1000);
		}
	  }, [counter]);
	  
	  const handleDown = () => {
		setIsCountingUp(false);
		setCounter(targetTime);
	  };
	


	  //check folder 4geeks 

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
		sixDigit = {calculateSeconds(counter, 1)} />
		 <div className="text-center mt-1">
          <div className="btn-group" role="group">
            <button className="btn btn-primary" onClick={handleStart} >
             Start
            </button>
            <button className="btn btn-secondary" onClick={handleStop} >
              Stop
            </button>
            <button className="btn btn-danger" onClick={handlereset} >
              Reset
            </button>
			<button className="btn btn-danger" onClick={handleDown} >
              Countdown
            </button>
          </div>
        </div>

		</>
	);
};

export default Home;
