import React from 'react';
import './Location.css'

function Location(props) {
    return (
        <div>
           <div className = "location temp">{props.city}, PK</div>
        </div>
    );
}

export default Location