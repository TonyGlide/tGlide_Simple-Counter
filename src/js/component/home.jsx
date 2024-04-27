import React from "react";
import SimpleCounter from "./SimpleCounter";


function calculateSeconds(aCounter, placeValue) {
return Math.floor(aCounter / placeValue) % 10

}

//create your first component
const Home = (props) => {
	return (
		<>
		<SimpleCounter 
		Digit6= {calculateSeconds(props.counter, 100000)}
		Digit5= {calculateSeconds(props.counter, 10000)}
		Digit4= {calculateSeconds(props.counter, 1000)}
		Digit3= {calculateSeconds(props.counter, 100)}
		Digit2= {calculateSeconds(props.counter, 10)}
		Digit1= {calculateSeconds(props.counter, 1)}
		/>
		</>
	);
};

export default Home;
