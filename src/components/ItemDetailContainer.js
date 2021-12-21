import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const getItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          id: 1,
          title: "Undertale",
          price: 500,
          pictureUrl: "https://images7.alphacoders.com/798/thumb-1920-798682.png",
        }),
      2000
    );
  });
};

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getItem().then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <>
      {product == null ? (
        <h3>Cargando detalle de un producto</h3>
      ) : (
        <>  
            <ItemDetail item = {product}/>
        </>
      )}
    </>
  );
};
export default ItemDetailContainer;
