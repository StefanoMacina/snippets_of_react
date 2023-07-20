import React from 'react'
import Navbar from './components/Navbar'
import CartItem from './components/CartItem'
import Cart from './components/Cart'


const App = () => {
  return (
    <div>
      <Navbar />
      <CartItem/>
      <Cart />
    </div>
  )
}

export default App