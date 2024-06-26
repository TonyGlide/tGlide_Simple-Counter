import React from "react";
import PropTypes from 'prop-types';  

const SimpleCounter = (props) => {

    return (

<div className="counter-display">
    <div className="clock-img"><svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" fill="currentColor" className="bi bi-stopwatch" viewBox="0 0 16 17">
  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
</svg></div>
    <div className="seconds hundred-thousands">{props.Digit6}</div>
    <div className="seconds ten-thousands">{props.Digit5}</div>
    <div className="seconds thousands">{props.Digit4}</div>
    <div className="seconsd hundres">{props.Digit3}</div>
    <div className="seconds tens">{props.Digit2}</div>
    <div className="seconds ones">{props.Digit1}</div>
<div/>
<div/>
</div>
    )
}

SimpleCounter.propTypes = {
    Digit6: PropTypes.number, 
    Digit5: PropTypes.number, 
    Digit4: PropTypes.number, 
    Digit3: PropTypes.number, 
    Digit2: PropTypes.number, 
    Digit1: PropTypes.number, 
}

export default SimpleCounter;
