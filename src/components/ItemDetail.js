import React from "react";
import "./itemDetail.css"

const ItemDetail =({item}) =>{
    console.log(item.title);
    return(
        <>  
            {item && 
            item.map((item)=>(
                <div key={item.id} className="itemContainer">
                <div className="item_img">
                    <img src= {item.pictureUrl} alt="Imagen Fondo" /> 
                </div>                
                <div className="item_description">
                    <h2>{item.title}</h2>
                    <br />
                    <p>Aca viene toda la descripcion del producto </p>
                    <br />
                    <p>El precio es: ${item.price}</p>
                </div>
            </div>
            ))}
            
        </>
    )
}
export default ItemDetail;