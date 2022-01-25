import React from "react";

function TimeFrame(){
    const  handleClick=(e)=>{
        e.preventDefault();
        e.target.style.backgroundColor = 'yellow'
             }    
    return(
<>
       
            <h4 >Timeframe</h4>
            <button onClick={handleClick} >1 Day</button>
            <button onClick={handleClick}  >7 Days</button>
            <button onClick={handleClick} >30 Days</button>
            <button onClick={handleClick} >1 Years</button>
            <button onClick={handleClick}  >5 Years</button>
        
        </>
    )
}
export default TimeFrame;