import React, { useContext, useEffect, useReducer, useState } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { useLocation } from 'react-router-dom'

export const CartDetail = (props) => {
  let initialState = 0;
  const reducer= (state,action) =>{
   if (action.type === "INCREMENT") {
    return parseInt(state + action.payLoad);
   }
   if (action.type === "DECREMENT") {
    return state>0?parseInt(state - action.payLoad):state;
   }
  }
  
    const [state,dispatch] =useReducer(reducer,initialState)
  
  const { cartItem, setCartItem } = useContext(CartContext);
      console.log(cartItem)
      const [total, setTotal] = useState(0);

      useEffect(() => {
        
        const newTotal = cartItem.reduce((acc, item) => acc + item.productPrice, 0);
        setTotal(newTotal);
      }, [cartItem]);
   
  function removeFromCart(productId, productPrice) {
    const updatedCart = cartItem.filter((item) => item.productId !== productId);
    setCartItem(updatedCart);
  }
function checkout(){
  alert(total)
}
  return (
    <div className='main__container'>
      <div className='added__contents'>
        <div className='card__items'>
          {cartItem.map((item) => (
            <div key={item.productId} className='card__contents'>
              <h1>{item.productTitle}</h1>
            <figure>
            <img src={item.productImage} alt="" />
            </figure>
              <h2>{item.productCategory}</h2>
              <h2>{item.productPrice}</h2>
              {/* <span onClick={() => dispatch({type:"INCREMENT",payLoad:item.productPrice})}>+</span>
             <input placeholder={`${state}`} disabled />
             <span onClick={() => 
              dispatch({type:"DECREMENT",payLoad:item.productPrice})}>-</span>
              //*/}
               <button onClick={() => removeFromCart(item.productId, item.productPrice)}>Delete</button> 
            </div>
          ))}
        </div>
        <div>
          <h2>Your bill</h2>
          <button>{total}</button>
          <button onClick={()=>checkout()}>Checkout</button>
        </div>
      </div>
    </div>
  );
}