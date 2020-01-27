import React from "react";
import Item from "./Item";
import ItemData from "./ItemData";

export default function List() {
    return (
        <div className="list" style={{display: 'flex', flexDirection: 'column'}}>
            {ItemData.map(item => <Item key={item.id} id={item.id} name={item.name} color={item.color}/>)}
        </div>
    )
}