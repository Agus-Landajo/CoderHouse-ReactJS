import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { db } from "./firebase.js";
import { getDocs, query, collection, where } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const dbDetailProducts = collection(db, "detalles_productos");
    if (id) {
      const consult = query(dbDetailProducts, where("id", "==", id));
      getDocs(consult)
        .then(({ docs }) => {
          setProduct(
            docs.map((doc) => ({
              ...doc.data(),
            }))
          );
        })
        .catch((error) => {
          alert("Error en la carga del producto")
          console.log(error);
        });
    }
  }, [id]);

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
