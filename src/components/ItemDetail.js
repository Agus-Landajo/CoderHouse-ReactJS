import React from "react";
import "./itemDetail.css";
import ItemCount from "./ItemCount";
import { useCartContext } from "./CartContext";

const ItemDetail = ({item}) => {
  const {addItem} = useCartContext();
  const onAdd = (quantityToAdd) => {
    alert("Añadiste " + quantityToAdd + " Items al carrito");
    addItem(quantityToAdd,item);
  };

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
                  <img
                    src={item.pictureUrl}
                    alt="Imagen Fondo"
                    className="main_img"
                  />
                </div>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="item_cart">
              <p>Precio Actual: ${item.price}</p>
              <ItemCount item={item} onAdd={onAdd} />
            </div>
          </div>
        ))}
    </>
  );
};
export default ItemDetail;
