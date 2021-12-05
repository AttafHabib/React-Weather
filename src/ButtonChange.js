import React from "react";

export default function ButtonChange(props){
    return(
        <div className="change_container">
          <button onClick={props.onIncClick} style={{backgroundColor: props.inc_color}}>Inc</button>
          <button onClick={props.onDecClick} style={{backgroundColor: props.dec_color}}>Dec</button>
         </div>     
    )
  }