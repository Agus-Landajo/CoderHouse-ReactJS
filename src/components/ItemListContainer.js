import React from "react";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";

const promiseProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            title: "Undertale",
            price: 500,
            brief_description: "Sumérgete en un mundo con rica historia y personajes, lleno de acción y suspenso.",
            pictureUrl:
              "https://i.pinimg.com/originals/6e/fa/10/6efa10339eddcb50c48538016239cd97.png",
            category: 1,
          },
          {
            id: 2,
            title: "Hollow Knight",
            price: 300,
            brief_description: "Vive la historia del Caballero en su búsqueda de los secretos del  abandonado reino de Hallownest.",
            pictureUrl: "https://preview.redd.it/9nskdj4u6w451.jpg?auto=webp&s=32867311bce18e4b46cac895ca5dd0e7fd334fff",
            category: 1,
          },
          {
            id: 3,
            title: "Spiritfearer",
            price: 200,
            brief_description: "Juego de gran calidad artística, aborda el tema de la muerte de manera diferente a otros juegos.",
            pictureUrl: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Spiritfarer_ThunderLotus_S2_1200x1600-363652f832a90d68f734e2b34fce91df",
            category: 2,
          },
        ]),
      2000
    );
  });
};

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    promiseProducts().then((data) => {
      if (id) {
        const filtredData = data.filter((product) => product.category == id);
        setProducts(filtredData);
      } else {
        setProducts(data);
      }
    });
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
