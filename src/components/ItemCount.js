import React from "react";
import { useState, useEffect } from "react";
import "./itemcount.css";

const ItemCount = ({item}) => {
  let [contador, setContador] = useState(0);

  const sumar = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const onAdd =()=>{
      if(contador > 0 && contador < item.stock){
          alert(`Acabas de comprar ${contador} items`);
      }
      item.stock = item.stock - contador;
  }

  return (
    <>
      <div className="card">
        <div className="card_img">
            <img src={item.cartPictureUrl} alt={item.title} />
        </div>
        <div className="card_cart">
          <button onClick={restar}>
            <span class="material-icons md-dark">remove</span>
          </button>
          <p>{contador}</p>
          <button onClick={sumar}>
            <span class="material-icons md-dark">add</span>
          </button>
        </div>
        <div className="card_add">
          <button onClick={onAdd}>
            <p>Agregar al carro</p>
          </button>
        </div>
      </div>
      
    </>
  );
};

export default ItemCount;
