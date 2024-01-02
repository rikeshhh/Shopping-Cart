
import './App.css'
import { CartProvider } from './CartContext/CartContext'
import {UserProvider} from './Context/UserProvider'
import { Dashboard } from './Dashboard/Dashboard'
function App() {

  return (
    <>
<UserProvider>
  <CartProvider>
   <Dashboard/>
  </CartProvider>
</UserProvider>
    </>
  )
}

export default App
