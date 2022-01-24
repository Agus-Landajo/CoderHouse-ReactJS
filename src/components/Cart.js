import React from "react";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase.js";
import { useState } from "react/cjs/react.development";

const Cart = () => {
  const { removeItem, clear, cart, cartTotal } = useCartContext();
  const [didBuy, setDidBuy] = useState(false);

  const sendData = () => {
    let clientName = document.getElementById("name").value;
    let clientTelephone = document.getElementById("telephone").value;
    let clientEmail = document.getElementById("email").value;

    const salesCollection = collection(db, "ventas");
    addDoc(salesCollection, {
      buyer: {
        name: clientName,
        phone: clientTelephone,
        mail: clientEmail,
      },
      items: cart,
      date: serverTimestamp(),
      total: cartTotal,
    })
      .then((result) => {
        console.log(result);
        clear();
        if (didBuy == true) {
          setDidBuy(!didBuy);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const endShopping = () => {
    if (didBuy == false) {
      setDidBuy(!didBuy);
    }
  };
  if (didBuy == true) {
    return (
      <>
        <div className="shopping_father">
          <form className="shopping_form" action="">
            <h2>Datos del Comprador</h2>
            <div className="form_inputs">
              <label for="name">Nombre:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form_inputs">
              <label for="telephone">Telefono:</label>
              <input type="text" id="telephone" name="telephone" />
            </div>
            <div className="form_inputs">
              <label for="email">Email:</label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="form_inputs">
              <label for="comments">Comentarios</label>
              <textarea
                name="comments"
                id="comments"
                cols="16"
                rows="7"
              ></textarea>
            </div>
            <p className="form_data">
              Los datos serán enviados a una DB en Firestore
            </p>
          </form>

          <div className="cart_prices">
            <h2>Resumen de la compra</h2>
            <br />

            <div className="cart_prices_cost">
              <p>Precio:</p> <p>${cartTotal.toFixed(2)}</p>
            </div>
            <div className="cart_prices_cost">
              <p>Impuestos:</p> <p>10%</p>
            </div>
            <hr />
            <div className="cart_prices_cost">
              <p>Subtotal</p>{" "}
              <p>{(cartTotal + (cartTotal * 10) / 100).toFixed(2)}</p>
            </div>
            <button
              onClick={() => {
                sendData();
              }}
              className="cart_prices_end_purchase"
            >
              Terminar la compra
            </button>
          </div>
        </div>
      </>
    );
  } else {
    if (cart.length == 0) {
      return (
        <>
          <div className="cart_no_items">
            <img
              src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png"
              alt="empty_cart"
            />
            <h3>No hay ningún item en el carrito actualmente</h3>
            <br />
            <Link to="/">Volver a la tienda</Link>
          </div>
        </>
      );
    } else if (cart.length < 3) {
      return (
        <>
          <div className="cart_father">
            <div className="cart_resume">
              <div className="cart_items">
                {cart.map((item) => (
                  <div key={item.id} className="cart_item_description">
                    <div className="cart_item_components">
                      <img
                        className="cart_item_description_img"
                        src={item.buyPicture}
                        alt={item.title}
                      />
                      <div className="cart_item_description_details">
                        <div>
                          <h3>{item.title}</h3>
                          <p>Unidades: {item.quantity}</p>
                        </div>
                        <div>
                          <p>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>

                    <button
                      className="cart_item_remove"
                      onClick={() => {
                        removeItem(item, item.quantity);
                      }}
                    >
                      Borrar Producto del carrito
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart_prices">
                <h2>Resumen de la compra</h2>
                <br />

                <div className="cart_prices_cost">
                  <p>Precio:</p> <p>${cartTotal.toFixed(2)}</p>
                </div>
                <div className="cart_prices_cost">
                  <p>Impuestos:</p> <p>10%</p>
                </div>
                <hr />
                <div className="cart_prices_cost">
                  <p>Subtotal</p>{" "}
                  <p>{(cartTotal + (cartTotal * 10) / 100).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => {
                    endShopping();
                  }}
                  className="cart_prices_end_purchase"
                >
                  Continuar a la compra
                </button>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="cart_father">
            <div className="cart_resume_more_items">
              <div className="cart_items">
                {cart.map((item) => (
                  <div key={item.id} className="cart_item_description">
                    <div className="cart_item_components">
                      <img
                        className="cart_item_description_img"
                        src={item.buyPicture}
                        alt={item.title}
                      />
                      <div className="cart_item_description_details">
                        <div>
                          <h3>{item.title}</h3>
                          <p>Unidades: {item.quantity}</p>
                        </div>
                        <div>
                          <p>${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>

                    <button
                      className="cart_item_remove"
                      onClick={() => {
                        removeItem(item, item.quantity);
                      }}
                    >
                      Borrar Producto del carrito
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart_prices">
                <h2>Resumen de la compra</h2>
                <br />

                <div className="cart_prices_cost">
                  <p>Precio:</p> <p>${cartTotal.toFixed(2)}</p>
                </div>
                <div className="cart_prices_cost">
                  <p>Impuestos:</p> <p>10%</p>
                </div>
                <hr />
                <div className="cart_prices_cost">
                  <p>Subtotal</p>{" "}
                  <p>{(cartTotal + (cartTotal * 10) / 100).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => {
                    endShopping();
                  }}
                  className="cart_prices_end_purchase"
                >
                  Continuar a la compra
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
};

export default Cart;
