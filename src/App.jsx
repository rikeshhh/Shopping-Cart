
import './App.css'
import { CartProvider } from './CartContext/CartContext'
import {UserProvider} from './Context/UserProvider'
import { Dashboard } from './Component/Dashboard/Dashboard'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
   <Dashboard/>
  {/* <CartProvider>
  </CartProvider> */}
{/* </UserProvider> */}
    </>
  )
}

export default App
