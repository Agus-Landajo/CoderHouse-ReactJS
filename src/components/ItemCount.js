import React from "react";
import { useState, useEffect } from "react";
import "./itemcount.css";
import {NavLink} from "react-router-dom";

const ItemCount = ({item,onAdd}) => {
  let [contador, setContador] = useState(0);
  let [buy,setBuy] = useState(false);
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

  const addItem =()=>{
      if(contador > 0 && contador <= item.stock){
          onAdd(contador);
          if(buy == false){
            setBuy(!buy);
          }  
      }
      item.stock = item.stock - contador;
  }

  if(buy == false){
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
            <button onClick={addItem}>
              <p>Agregar al carro</p>
            </button>
          </div>
        </div>
        
      </>
    );
  } else{
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
            <button onClick={addItem}>
              <p>Agregar al carro</p>
            </button>
          </div>
          <NavLink className="card_to_cart" to="/cart">
          
            <button><p>Ir al carrito</p></button>  <span class="material-icons">shopping_cart</span>
             
          </NavLink>
             
        </div>
        
      </>
    );
  }
 
};

export default ItemCount;
