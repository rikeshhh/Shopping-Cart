import React, { useContext, useReducer, useState } from 'react'
import { UserContext } from '../../Context/UserProvider'
import { CartContext } from '../../CartContext/CartContext';
import { CartDetail } from '../Cart/CartDetail';
import './dashboar.css'
import HeroSection from '../HeroSection/HeroSection';
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
    console.log(productCategory)
  }
const [popUp,setOpenPop] = useState(false)
const handleLoginClose = ()=>{
  setOpenPop(false)
}
  return (
    <div className='main__container'>
      <HeroSection/>
      
     <div className='allproducts'>
      <h2>All Products</h2>
     <div className='card__items ' >
     
     {
       
       products.map((product, index) => (
         <div key={product.id} className='card__contents'>
           <h1>{product.title}</h1>
           <figure>
           <img src={product.image} alt="" />
           </figure>
           <span>{product.category}</span>
         
           <span>{product.price}</span>
           <div>
             <span onClick={() => dispatch({type:"INCREMENT",payLoad:product.price})}>+</span>
             <input placeholder={`${state}`} disabled />
             <span onClick={() => 
              dispatch({type:"DECREMENT",payLoad:product.price})}>-</span>
           </div>

           <button onClick={()=>addToCart(product.id,product.title,product.image,product.category)}>Add to Cart</button>
         </div>
       ))
     }
     
     </div>
     </div>


    </div>
  )
}
