import React from "react";
import { useState, useEffect } from "react";
import "./itemcount.css";

const ItemCount = ({ stock, inicial }) => {
  let [contador, setContador] = useState(inicial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const onAdd =()=>{
      if(contador > 0 && contador < stock){
          alert(`Acabas de comprar ${contador} items`);
      }
      stock = stock - contador;
  }

  return (
    <>
      <div className="card">
        <div className="card_img">
          <p>Aca iria el producto</p>
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
