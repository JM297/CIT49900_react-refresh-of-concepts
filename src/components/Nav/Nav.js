import React from 'react';
import {NavLink} from "react-router-dom";

export default function Nav(){
    return(
        <div  className="nav" style={{marginBottom: 25}}>
            <ul style={{display:'contents', listStyle: 'none'}} className="navBar">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/list"}>Items</NavLink></li>
            </ul>
        </div>
    )
}