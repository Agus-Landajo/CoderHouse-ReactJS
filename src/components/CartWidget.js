import React from "react";
import { useCartContext } from "./CartContext";


const CartWidget = () => {
  const {cartItems} = useCartContext();
  if(cartItems == 0){
    return (
      <>
      <div className="cart_icon">
         <span class="material-icons">shopping_cart</span>
        <div className="no_items">{cartItems}</div>
      </div>
       
  
      </>
    );
  }else{
    return (
      <>
      <div className="cart_icon">
         <span class="material-icons">shopping_cart</span>
        <div className="total_items">{cartItems}</div>
      </div>
       
  
      </>
    );
  }
  
};

export default CartWidget;