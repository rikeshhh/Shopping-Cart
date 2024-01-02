import { createContext, useEffect, useState } from "react";

const CartContext = createContext(null);

const CartProvider = (props) =>{
    const {children} = props;
    const [cartItem,setCartItem] = useState([]);
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         try{
    // const response =await axios('https://fakestoreapi.com/products')
    // setApiResult(response.data)
    //     }catch (error){
    //         console.error("error fetching data:",error)
    //     }
    // }
    //     fetchData();
    //   },[])

return (
    <>
    <CartContext.Provider  value ={{setCartItem,cartItem}} >
        {children}
    </CartContext.Provider>
    </>
)
}
export {CartContext,CartProvider}