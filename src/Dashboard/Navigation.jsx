import React, { useContext, useReducer, useState } from 'react'
import { UserContext } from '../Context/UserProvider'
import { CartContext } from '../CartContext/CartContext';
import { CartDetail } from './CartDetail';

export const Navigation = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [productPrice, setProductPrice] = useState()
  const products = useContext(UserContext)
  const {setCartItem} = useContext(CartContext)
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

  function increment(productAmount) {
    setTotalCount(totalCount + parseInt(productAmount))

  }
  function decrement(productAmount) {
    if (totalCount != 0) {
      setTotalCount(totalCount - parseInt(productAmount))
    }
  }
  function addToCart (productId,productTitle,productImage){
    setCartItem(prevCartItems => [...prevCartItems, { productId, productTitle,productImage }])
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
              <button onClick={() => dispatch({type:"INCREMENT",payLoad:product.price})}>+</button>
              <input placeholder={`${state}`} disabled />
              <button onClick={() => 
               dispatch({type:"DECREMENT",payLoad:product.price})}>-</button>
            </div>

            <button onClick={()=>addToCart(product.id,product.title,product.image)}>Add to Cart</button>
          </div>
        ))
      }

    </div>
  )
}
