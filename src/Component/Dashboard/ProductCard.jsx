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
  const {setCartItem,cartItem} = useContext(CartContext)


  async function addToCart(productId, productTitle, productImage, productPrice) {
    const cartItem = { productId, productTitle, productImage, productPrice };
  
    setCartItem(prevCartItems => [...prevCartItems, cartItem]);
  
    alert("Product added successfully");
  
    const response = await fetch('http://localhost:3000/cart', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItem),
    });
  
    if (!response.ok) {
      console.error("Failed to add product to cart");
    }
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
           
           </div>

           <button onClick={()=>addToCart(product.id,product.title,product.image,product.price)}>Add to Cart</button>
         </div>
       ))
     }
     
     </div>
     </div>


    </div>
  )
}
