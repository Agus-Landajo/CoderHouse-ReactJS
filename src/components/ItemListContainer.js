import React from "react";
import "./itemListContainer.css";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const promiseProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, title: "Undertale", price: 500, pictureUrl: "imagen" },
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
