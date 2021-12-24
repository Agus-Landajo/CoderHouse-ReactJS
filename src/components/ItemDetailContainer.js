import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const getItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([ 
          {
            id: 1,
            title: "Undertale",
            price: 500,
            pictureUrl:
              "https://images7.alphacoders.com/798/thumb-1920-798682.png",
          },
          {
            id: 2,
            title: "Hollow Knight",
            price: 300,
            pictureUrl: "imagen",
            
          },
          {
            id: 3,
            title: "Spiritfearer",
            price: 200,
            pictureUrl: "imagen",
          }
        ]),
      2000
    );
  });
};

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getItem().then((data) => {
      
        const filtredData = data.filter((products) => products.id == id);
        setProduct(filtredData);      
    });
  }, []);
  console.log(product);

  return (
    <>
      {product.length == 0 ? (
        <h3>Cargando detalle de un producto</h3>
      ) : (
        <>
          <ItemDetail item={product} />
        </>
      )}
    </>
  );
};
export default ItemDetailContainer;
