import React from "react";

export default function Temprature(props){
    return(
        <div>
          <p className=' temp center_text'>{props.temp}°c</p>
        </div>
    )
}