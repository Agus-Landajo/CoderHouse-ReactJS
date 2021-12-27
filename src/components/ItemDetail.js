import React from "react";
import "./itemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  console.log(item.title);
  return (
    <>
      {item &&
        item.map((item) => (
          <div key={item.id} className="itemContainer">
            <div className="item_brief">
              <div className="item_description">
                <h2>{item.title}</h2>
                <br />
                <div className="item_img">
                  <img src={item.pictureUrl} alt="Imagen Fondo" />
                </div>
                <p>{item.description}</p>
               
              </div>
            </div>
            <div className="item_cart">
                <p>Precio Actual: ${item.price}</p>
                <ItemCount item={item} />
              </div>
          </div>
        ))}
    </>
  );
};
export default ItemDetail;
