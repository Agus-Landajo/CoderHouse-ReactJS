import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.development";

//importar useContext en los otros componentes para utlizar el valor y el contexto en si
const context = createContext();

const { Provider } = context;

export const useCartContext = () => {
  return useContext(context);
};

const CartContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);
  const [cart, setCart] = useState([]);

  const addItem = (quantity, item) => {
    item.map((item) => {
      const item_copy = { ...item };

      if (isInCart(item_copy.id)) {
          for(let i = 0; i < cart.length; i++){
              if(cart[i].id == item_copy.id){
                  cart[i].quantity = cart[i].quantity + quantity;
              }
          }
        setCartItems(cartItems + quantity);
      } else {       
            item_copy.quantity = quantity;
            const cartCopy = cart.slice(0);
            cartCopy.push(item_copy);
            setCart(cartCopy);
            setCartItems(cartItems + quantity);
            
      }
    });
  };

  const removeItem = (id) => {
    const filtredItems = cart.filter((items) => items.id != id);
    setCart(filtredItems);
  };

  const clear = () => {
    setCartItems(0);
    setCart([]);
  };

  const isInCart = (id) => {
    let InCart = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        InCart = true;
      }
    }
    return InCart;
  };

  const contextValue = {
    cartItems,
    cart,
    addItem,
    removeItem,
    clear,
  };

  console.log(cart);
  return (
    <>
      <Provider value={contextValue}>{children}</Provider>
    </>
  );
};

export default CartContext;
