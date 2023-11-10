import React from "react";
import propTypes from "prop-types";

const SimpleCounter = (props) => {
    
    
   
    return (
        <>
        <div className="counter-display" >
            <div className="ImgFont border border-secondary rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>
            </div>
            
            <div className="1Digit border border-secondary rounded">{props.oneDigit}</div>
            <div className="2Digit border border-secondary rounded">{props.twoDigit}</div>
            <div className="3Digit border border-secondary rounded">{props.threeDigit}</div>
            <div className="4Digit border border-secondary rounded">{props.fourDigit}</div>
            <div className="5Digit border border-secondary rounded">{props.fiveDigit}</div>
            <div className="6Digit border border-secondary rounded">{props.sixDigit}</div>
            
        </div>
       
        </>
    )
}

export default SimpleCounter ;