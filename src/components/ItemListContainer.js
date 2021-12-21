import React from "react";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./itemListContainer.css";


const promiseProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, title: "Undertale", price: 500, pictureUrl: "https://www.nawpic.com/media/2020/undertale-spoiler-nawpic.jpg" },
          { id: 2, title: "Hollow Knight", price: 300, pictureUrl: "imagen" },
          { id: 3, title: "Spiritfearer", price: 200, pictureUrl: "imagen" },
        ]),2000
    );
  });
};

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    promiseProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      {products.length == 0 ? (
        <h3>Cargando productos...</h3>
      ) : (
        <>  
            <ItemList items={products}/>
        </>
      )}
    </>
  );
};

export default ItemListContainer;
