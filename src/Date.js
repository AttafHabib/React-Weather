import React from "react";

export default function Date(){
    let today = String(new window.Date())
    today = today.slice(0, 15)
    return(
        <div>
            <div className='center_text'>{today}</div>
        </div>
    )
}