import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from './Layout.jsx';
import { CartProvider } from './CartContext/CartContext.jsx';
import { UserProvider } from './Context/UserProvider.jsx';
import { CartDetail } from './Component/Cart/CartDetail.jsx';
import { ProductCard } from './Component/Dashboard/ProductCard.jsx';
import DynamicCom from './Category/DynamicCom.jsx';
import HeroSection from './Component/HeroSection/HeroSection.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      
      { 
      path: "/",
      element: <ProductCard/>
    },
    {
      path:"/category/men's clothing",
      element:<DynamicCom/>
    },
    {
      path:'/category/jewelery',
      element:<DynamicCom/>
    },
    {
      path:'/category/electronics',
      element:<DynamicCom/>
    },
    {
      path:"/category/womens's clothing",
      element:<DynamicCom/>
    },
    {
      path:"cartDetail",
      element:<CartDetail/>
    },
 ]
  },
  

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<UserProvider>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
</UserProvider>
  </React.StrictMode>,
)
