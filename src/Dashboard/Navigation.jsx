import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserProvider'
import { CartContext } from '../CartContext/CartContext';

export const Navigation = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [productPrice, setProductPrice] = useState()
  const products = useContext(UserContext)
  const setCartItem = useContext(CartContext)
  function increment(productAmount) {
    setTotalCount(totalCount + parseInt(productAmount))

  }
  function decrement(productAmount) {
    if (totalCount != 0) {
      setTotalCount(totalCount - parseInt(productAmount))
    }
  }
  function addToCart (productId){
    setCartItem(productId)
  }
  console.log(products)
  return (
    <div>

      {
        products.map((product, index) => (
          <div key={product.id}>
            <img src={product.image} alt="" />
            <h1>{product.title}</h1>
            <span>{product.category}</span>
            <p>{product.description}</p>
            <span>{product.price}</span>
            <div>
              <button onClick={() => increment(product.price)}>+</button>
              <input placeholder={`${totalCount}`} disabled />
              <button onClick={() => decrement(product.price)}>-</button>
            </div>

            <button onClick={()=>addToCart(product.id)}>Add to Cart</button>
          </div>
        ))
      }

    </div>
  )
}
