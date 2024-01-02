import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

export const CartDetail = (props) => {
    const {setCartItem,cartItem}= useContext(CartContext)
    console.log(cartItem)
  return (
    <div>
         {cartItem.map((item) => (
                <div key={item.id}>
                    <h1>{item.productTitle}jk</h1>
                    <img src={item.productImage} alt="" />
                </div>
            ))}
        <button onClick={props.onClose}>Close</button>
    </div>
  )
}
