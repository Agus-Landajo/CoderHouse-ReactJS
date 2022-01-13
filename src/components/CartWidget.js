import React from "react";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const {cartItems} = useCartContext();
  if(cartItems == 0){
    return (
      <>
      
      <Link to="/cart" className="cart_icon">
         <span class="material-icons">shopping_cart</span>
        <div className="no_items">{cartItems}</div>
      </Link>
      </>
    );
  }else{
    return (
      <>
       <Link to="/cart" className="cart_icon">
         <span class="material-icons">shopping_cart</span>
        <div className="total_items">{cartItems}</div>
      </Link>
       
  
      </>
    );
  }
  
};

export default CartWidget;