import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CartContext, CartProvider } from '../CartContext/CartContext';
import HeroSlider from '../Component/HeroSection/HeroSlider';

const DynamicCom = () => {
  const { cartItem, setCartItem } = useContext(CartContext);
  let initialState = 0
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return parseInt(state + action.payLoad);
    }
    if (action.type === "DECREMENT") {
      return state > 0 ? parseInt(state - action.payLoad) : state;
    }
  }
  function addToCart(productId, productTitle, productImage, productPrice) {
    setCartItem(prevCartItems => [...prevCartItems, { productId, productTitle, productImage, productPrice }]);
    alert("product added successfully")
    console.log(setCartItem)
  }
  function removeFromCart(productId) {
    const updatedCart = cartItems.filter((item) => item.productId !== productId);
    setCartItems(updatedCart);

  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const [category, setCategory] = useState([])
  const location = useLocation();

  console.log(setCategory)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`https://fakestoreapi.com/products${location.pathname}`)
        setCategory(response.data)
      } catch (error) {
        console.error("error fetching data:", error)
      }
    }
    fetchData();
  }, [location])
  console.log(location.pathname);
  console.log("Cat",category)
  return (
    <div className='main__container'>
                <HeroSlider slides={category} />
  <div className="allproducts">
  <div className='card__items'>
   {category.map((item) => (
          <div className='card__contents' key={item.id}>
            <figure>
              <img src={item.image} alt="" />
            </figure>
            <h1>{item.title}</h1>
            <span>{item.category}</span>
            {/* <p>{item.description}</p> */}
            <span>{item.price}</span>
            {/* <div>
              <button onClick={() => dispatch({ type: "INCREMENT", payLoad: item.price })}>+</button>
              <input placeholder={`${state}`} disabled />
              <span onClick={() =>
                dispatch({ type: "DECREMENT", payLoad: item.price })}>-</span>
            </div> */}
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
            <button onClick={() => addToCart(item.id, item.title, item.image, item.price)}>Add to Cart</button>
          </div>
      ))}
   </div>
    </div>
  </div>
  )
}

export default DynamicCom