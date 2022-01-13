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
            stock: 1,
            buyPicture: "https://i.pinimg.com/originals/6e/fa/10/6efa10339eddcb50c48538016239cd97.png",
            description: "Undertale es un videojuego de rol creado por el desarrollador independiente Toby Fox, en el que se adopta el control de un niño humano que ha caído en un mundo subterráneo conocido como el subsuelo, una enorme región debajo de la superficie de la tierra, aislada por una poderosa barrera mágica. A lo largo de la partida se encuentra con varios monstruos durante su misión principal de regresar a la superficie, principalmente a través del sistema de combate, que consiste en esquivar del adversario y optar por ofrecer piedad o atacar a los monstruos.",
            cartPictureUrl: "https://www.teahub.io/photos/full/95-959098_undertale-game-undertale.jpg",
            pictureUrl:
              "https://images7.alphacoders.com/798/thumb-1920-798682.png",
          },
          {
            id: 2,
            title: "Hollow Knight",
            price: 300,
            stock: 3,
            buyPicture: "https://preview.redd.it/9nskdj4u6w451.jpg?auto=webp&s=32867311bce18e4b46cac895ca5dd0e7fd334fff",
            description: "Hollow Knight es una aventura de acción clásica en 2D ambientada en un vasto mundo interconectado. Explora cavernas tortuosas, ciudades antiguas y páramos mortales. Combate contra criaturas corrompidas, haz nuevas amistades con extraños insectos y resuelve los antiguos misterios que yacen en el corazón del reino.Gran parte de la historia de Hollow Knight no se le cuenta al jugador directamente y, en cambio, se insinúa en los entornos, las interacciones de los personajes y los secretos que debe descubrir jugando. Gran parte de los detalles también se dejan vagos para reflejar y acentuar el estado de Hallownest como un gran reino abandonado.",
            cartPictureUrl: "https://images3.alphacoders.com/866/thumb-350-866195.jpg",
            pictureUrl: "http://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_download_software_5/H2x1_WiiUDS_HollowKnight_image1280w.jpg",
            
          },
          {
            id: 3,
            title: "Spiritfearer",
            price: 200,
            stock: 2,
            buyPicture: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Spiritfarer_ThunderLotus_S2_1200x1600-363652f832a90d68f734e2b34fce91df",
            description: "En Spiritfarer nos ponemos en la piel del barquero de la muerte, el ente a las órdenes de Hades que debía encargarse de transportar las almas hasta el inframundo según la mitología grecoromana. Sin embargo el juego abandona toda iconografía conocida, rasgando las túnicas roídas y arrojando por el desagüe la idea de un río Aqueronte de aguas oscuras y tenebrosas. Con el color y la vitalidad por bandera, nuestro personaje es sólo una dulce y atenta niña que debe acompañar a las almas perdidas durante sus últimos días en este mundo. Personajes que, en forma de animales antropomórficos pintados y animados con una exquisitez que invita al aplauso, deben resolver sus últimos asuntos y preocupaciones antes de dar el salto a la otra vida.",
            cartPictureUrl: "https://www.chickensmoothie.com/oekaki/image/image.php?id=3698822&size=large&format=auto&rev=1599498352",
            pictureUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/spiritfarer-2034803.jpg?itok=0BbNKwbL",
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
