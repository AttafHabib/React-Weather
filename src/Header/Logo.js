import React from "react";
import logoImage from '../assets/logo.png'
import logosmall from '../assets/logosmall.png'

import "./Logo.css"

export default function Logo() {
    return (
        <div>
           <img className='logo-large' src={logoImage} alt='BestWeather'></img>
           <img className='logo-small' src={logosmall} alt='BestWeather'></img>
        </div>
    );
}