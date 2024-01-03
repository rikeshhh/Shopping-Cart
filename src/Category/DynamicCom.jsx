import React, { useEffect, useReducer, useState } from 'react'
import { useLocation } from 'react-router-dom';

const DynamicCom = () => {
  let initialState = 0
  function reducer(state,action) {
    if(action.type === "INCREMENT"){
      return parseInt(state + action.payLoad);

    }
    if (action.type === "DECREMEMT") {
      return parseInt(state - action.payLoad);
    }
  }
  const [state,dispatch] = useReducer(reducer,initialState)
  const [category,setCategory] = useState([])
  const location = useLocation();

  console.log(setCategory)
    useEffect(()=>{
        const fetchData = async () => {
            try{
    const response =await axios(`https://fakestoreapi.com/products/${location}`)
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
    <button onClick={() => dispatch({type:"INCREMENT",payLoad:product.price})}>+</button>
    <input placeholder={`${state}`} disabled />
    <button onClick={() => 
     dispatch({type:"DECREMENT",payLoad:product.price})}>-</button>
  </div>

  <button onClick={()=>addToCart(product.id,product.title,product.image,product.category)}>Add to Cart</button>
</div>
))}
    </div>
  )
}

export default DynamicCom