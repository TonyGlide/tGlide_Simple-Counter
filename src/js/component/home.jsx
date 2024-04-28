import React from "react";
import SimpleCounter from "./SimpleCounter";
import PropTypes from 'prop-types'; 
import calculateSeconds from "../lib/time";


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

Home.propTypes = {
    Digit6: PropTypes.number, 
    Digit5: PropTypes.number, 
    Digit4: PropTypes.number, 
    Digit3: PropTypes.number, 
    Digit2: PropTypes.number, 
    Digit1: PropTypes.number, 
}


export default Home;
