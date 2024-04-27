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
		hundred-thousandsDigit= {calculateSeconds(props.counter, 100000)}
		ten-thousandsDigit= {calculateSeconds(props.counter, 10000)}
		thousandsDigit= {calculateSeconds(props.counter, 1000)}
		hundresDigit= {calculateSeconds(props.counter, 100)}
		tensDigit= {calculateSeconds(props.counter, 10)}
		onesDigit= {calculateSeconds(props.counter, 1)}
		/>
		</>
	);
};

export default Home;
