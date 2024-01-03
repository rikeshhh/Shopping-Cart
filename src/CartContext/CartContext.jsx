import { createContext, useEffect, useState } from "react";

const CartContext = createContext(null);

const CartProvider = (props) =>{
    const {children} = props;
    const [cartItem,setCartItem] = useState([]);
  

return (
    <>
    <CartContext.Provider  value ={{setCartItem,cartItem}} >
        {children}
    </CartContext.Provider>
    </>
)
}
export {CartContext,CartProvider}