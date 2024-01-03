import React, { useContext, useReducer, useState } from 'react'
import { UserContext } from '../../Context/UserProvider'
import { CartContext } from '../../CartContext/CartContext';
import { CartDetail } from '../Cart/CartDetail';
import './dashboar.css'
export const ProductCard = () => {
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

  
  function addToCart (productId,productTitle,productImage,productCategory){
    setCartItem(prevCartItems => [...prevCartItems, { productId, productTitle,productImage,productCategory}])
    alert("product added successfully")
  }
const [popUp,setOpenPop] = useState(false)
const handleLoginClose = ()=>{
  setOpenPop(false)
}
  return (
    <div className='main__container'>
      <button onClick={()=>{setOpenPop(true)}}>View Cart</button>
{popUp && <CartDetail onClose={handleLoginClose}/>}
      <div className='card__items ' >
     
      {
        
        products.map((product, index) => (
          <div key={product.id} className='card__contents'>
            <figure>
            <img src={product.image} alt="" />
            </figure>
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

            <button onClick={()=>addToCart(product.id,product.title,product.image,product.category)}>Add to Cart</button>
          </div>
        ))
      }
      </div>


    </div>
  )
}
