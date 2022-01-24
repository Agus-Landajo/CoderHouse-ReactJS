import React from "react";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";

import { db } from "./firebase.js";
import { getDocs, query, collection, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const dbListProducts = collection(db, "lista_productos");

    if (id) {
      const consult = query(dbListProducts, where("category", "==", id));
      getDocs(consult)
        .then(({ docs }) => {
          setProducts(
            docs.map((doc) => ({
              ...doc.data(),
            }))
          );
        })
        .catch((error) => {
          alert("Error en la carga de los productos");
          console.log(error);
        });
    } else {
      getDocs(dbListProducts)
        .then(({ docs }) => {
          setProducts(docs.map((doc) => ({ ...doc.data() })));
        })
        .catch((error) => {
          alert("Error en la carga de los productos");
          console.log(error);
        });
    }
  }, [id]);

  return (
    <>
      {products.length == 0 ? (
        <h3>Cargando productos...</h3>
      ) : (
        <>
          <ItemList items={products} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
