import React from "react";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { removeItem, clear, cart, cartTotal } = useCartContext();

  if (cart.length == 0) {
    return (
      <>
        <div className="cart_no_items">
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
                <p>Precio:</p> <p>${cartTotal}</p>
              </div>
              <div className="cart_prices_cost">
                <p>Impuestos:</p> <p>10%</p>
              </div>
              <hr />
              <div className="cart_prices_cost">
                <p>Subtotal</p> <p>{cartTotal + (cartTotal * 10) / 100}</p>
              </div>
              <button className="cart_prices_end_purchase">
                Terminar la compra
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
                <p>Precio:</p> <p>${cartTotal}</p>
              </div>
              <div className="cart_prices_cost">
                <p>Impuestos:</p> <p>10%</p>
              </div>
              <hr />
              <div className="cart_prices_cost">
                <p>Subtotal</p> <p>{cartTotal + (cartTotal * 10) / 100}</p>
              </div>
              <button className="cart_prices_end_purchase">
                Terminar la compra
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
