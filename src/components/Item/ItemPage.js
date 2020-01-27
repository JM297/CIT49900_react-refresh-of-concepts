import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import ItemData from "./ItemData";

export default function ItemPage(props) {
    const [post, setPost] = useState({ id:"", name:"", text:"", color:"" });
    useEffect(()=>{
        for(let i=0; i<ItemData.length; i++){
            if(props.match.params.id === ItemData[i].id){
                setPost({
                    id:ItemData[i].id,
                    name:ItemData[i].name,
                    text:ItemData[i].text,
                    color:ItemData[i].color
                })
            }
        }
    },[]);
    return (
        <div className="post" key={post.id}>
            <h1>{post.name}</h1>
            <p>{post.text}</p>
            <h3 style={{color:post.color}}>My color is {post.color}</h3>
            <button>
                <Link to={"/list"} style={{textDecoration: 'none', color: 'black'}}>
                    Return to List
                </Link>
            </button>
        </div>
    )
}
