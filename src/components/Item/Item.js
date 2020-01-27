import React, {useState} from 'react';
import {Link} from "react-router-dom";

export default function Item(props) {
    let [clicked, setClicked] = useState(false);
    return(
        <div
            className="item"
            onClick={()=>setClicked(clicked => !clicked)}
            style={{width: 300, height: 120, alignSelf:'center', marginBottom: 25, backgroundColor: clicked ? props.color : ''}}
        >
            <h1>Item {props.id}: {props.name}</h1>
            <button>
                <Link style={{textDecoration: 'none', color: 'black'}} to={`/list/item/${props.id}`}>Go to Item {props.id}'s Page</Link>
            </button>
        </div>
    )
}