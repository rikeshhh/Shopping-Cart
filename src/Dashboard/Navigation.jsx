import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserProvider'
import { CartContext } from '../CartContext/CartContext';
import { CartDetail } from './CartDetail';

export const Navigation = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [productPrice, setProductPrice] = useState()
  const products = useContext(UserContext)
  const {setCartItem} = useContext(CartContext)
  function increment(productAmount) {
    setTotalCount(totalCount + parseInt(productAmount))

  }
  function decrement(productAmount) {
    if (totalCount != 0) {
      setTotalCount(totalCount - parseInt(productAmount))
    }
  }
  function addToCart (productId,productTitle){
    setCartItem(prevCartItems => [...prevCartItems, { productId, productTitle }])
    alert("product added successfully")
  }
const [popUp,setOpenPop] = useState(false)
const handleLoginClose = ()=>{
  setOpenPop(false)
}
  return (
    <div>
<button onClick={()=>{setOpenPop(true)}}>View Cart</button>
{popUp && <CartDetail onClose={handleLoginClose}/>}
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

            <button onClick={()=>addToCart(product.id,product.title)}>Add to Cart</button>
          </div>
        ))
      }

    </div>
  )
}
