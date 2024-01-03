import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { useLocation } from 'react-router-dom'

export const CartDetail = (props) => {
  const { cartItem, setCartItem } = useContext(CartContext);
      console.log(cartItem)
    function removeFromCart(productId) {
      const updatedCart = cartItem.filter((item) => item.productId !== productId);
      setCartItem(updatedCart)
    }
  return (
    <div className='main__container'>
         {cartItem.map((item) => (
                <div key={item.productId}>
                    <h1>{item.productTitle}</h1>
                    <img src={item.productImage} alt="" />
                    <h2>{item.productCategory}</h2>
                    <button onClick={()=>removeFromCart(item.productId)}>Delete</button>

                </div>
            ))}
        <button onClick={props.onClose}>Close</button>
    </div>
  )
}
