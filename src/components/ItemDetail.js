import React from "react";
import "./itemDetail.css";
import ItemCount from "./ItemCount";
import { useCartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useCartContext();
  const onAdd = (quantityToAdd) => {
    addItem(quantityToAdd, item);
  };
  return (
    <>
      {item &&
        item.map((item) => (
          <div key={item.id} className="itemContainer">
            <div className="item_brief">
              <div className="item_description">
                <h2 className="h2_detail">{item.title}</h2>
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
              <ItemCount item={item} onAdd={onAdd} />
            </div>
          </div>
        ))}
    </>
  );
};
export default ItemDetail;
