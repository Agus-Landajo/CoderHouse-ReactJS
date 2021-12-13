import React from "react";
import "./itemListContainer.css"
import ItemCount from "./ItemCount";
const ItemListContainer =(props)=>{
    return(
        <>
            <p className="try_text">{props.texto}</p>
            <ItemCount stock= {5} inicial= {1}/>
        </>
    )
}

export default ItemListContainer;