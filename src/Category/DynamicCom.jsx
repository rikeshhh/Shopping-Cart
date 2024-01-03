import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CartContext, CartProvider } from '../CartContext/CartContext';

const DynamicCom = () => {
  const {setCartItem} = useContext(CartContext)
  let initialState = 0
  const reducer= (state,action) =>{
    if (action.type === "INCREMENT") {
     return parseInt(state + action.payLoad);
    }
    if (action.type === "DECREMENT") {
     return state>0?parseInt(state - action.payLoad):state;
    }
   }
   function addToCart (productId,productTitle,productImage,productCategory){
    setCartItem(prevCartItems => [...prevCartItems, { productId, productTitle,productImage,productCategory}])  ;
      alert("product added successfully")
    console.log(setCartItem)
  }
 
  const [state,dispatch] = useReducer(reducer,initialState)
  const [category,setCategory] = useState([])
  const location = useLocation();

  console.log(setCategory)
    useEffect(()=>{
        const fetchData = async () => {
            try{
    const response =await axios(`https://fakestoreapi.com/products${location.pathname}`)
    setCategory(response.data)
        }catch (error){
            console.error("error fetching data:",error)
        }
    }
        fetchData();
      },[location])
      console.log(location.pathname);
  return (
    <div>
{category.map((item)=>(
  <div key={item.id} className='card__contents'>
  <figure>
  <img src={item.image} alt="" />
  </figure>
  <h1>{item.title}</h1>
  <span>{item.category}</span>
  <p>{item.description}</p>
  <span>{item.price}</span>
  <div>
    <button onClick={() => dispatch({type:"INCREMENT",payLoad:item.price})}>+</button>
    <input placeholder={`${state}`} disabled />
    <button onClick={() => 
     dispatch({type:"DECREMENT",payLoad:item.price})}>-</button>
  </div>
  <button onClick={()=>addToCart(item.id,item.title,item.image,item.category)}>Add to Cart</button>
</div>
))}
    </div>
  )
}

export default DynamicCom