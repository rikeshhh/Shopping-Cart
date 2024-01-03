import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { useLocation } from 'react-router-dom'

export const CartDetail = (props) => {
    const {cartItem}= useContext(CartContext)
    console.log(cartItem)

  return (
    <div className='main__container'>
         {cartItem.map((item) => (
                <div key={item.productId}>
                    <h1>{item.productTitle}</h1>
                    <img src={item.productImage} alt="" />
                </div>
            ))}
        <button onClick={props.onClose}>Close</button>
    </div>
  )
}
