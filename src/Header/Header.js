import React from "react";
import Temprature from "../Temprature";
import Logo from "./Logo.js"
import Location from "./Location.js"

import './Header.css'

export default function Header(props) {
    return (
        <div id="headerContainer">
            <div className='center'>
                <Logo />
            </div>
            <Location city={props.city}/>
            <div style={{ paddingLeft: 10}}>
                <Temprature temp={props.temprature}/>
            </div>
            <div className='search-box'>
                <form onSubmit={props.searchTemp}>
                    <input type="text" value={props.inputCity} className="search-bar" placeholder="Search" onChange={props.citySearched}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        </div>
    );
}