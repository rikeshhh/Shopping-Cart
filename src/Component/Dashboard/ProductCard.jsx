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


  
  function addToCart (productId,productTitle,productImage,productPrice){
    setCartItem(prevCartItems => [...prevCartItems, { productId, productTitle,productImage,productPrice}])
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
