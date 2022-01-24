import React from "react";
import { useState } from "react";
import "./itemcount.css";
import { NavLink } from "react-router-dom";

const ItemCount = ({ item, onAdd }) => {
  let [contador, setContador] = useState(0);
  let [buy, setBuy] = useState(false);

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

  const addItem = () => {
    if (contador > 0 && contador <= item.stock) {
      onAdd(contador);
      if (buy == false) {
        setBuy(!buy);
      }
    }
    item.stock = item.stock - contador;
    setContador(0);
  };

  if (buy == false) {
    return (
      <>
        <div className="card">
          <div className="card_img">
            <img src={item.cartPictureUrl} alt={item.title} />
          </div>
          <p className="card_price">${item.price}</p>
          <div className="card_cart">
            <button onClick={restar}>
              <span class="material-icons md-dark">remove</span>
            </button>
            <p>Cantidad: {contador}</p>
            <button onClick={sumar}>
              <span class="material-icons md-dark">add</span>
            </button>
          </div>
          <div className="card_add">
            <button onClick={addItem}>
              <p>Agregar al carro</p>
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card">
          <div className="card_img">
            <img src={item.cartPictureUrl} alt={item.title} />
          </div>
          <p className="card_price">${item.price}</p>
          <p>Item agregado al carrito</p>
          <NavLink className="card_add" to="/cart">
            <button onClick={addItem}>
              <p>Ver en el carrito</p>
            </button>
          </NavLink>
        </div>
      </>
    );
  }
};

export default ItemCount;
