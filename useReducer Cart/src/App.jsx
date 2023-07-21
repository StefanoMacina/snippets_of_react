import React from 'react'
import Navbar from './components/Navbar'
import CartItem from './components/CartItem'
import Cart from './components/Cart'
import { useGlobalContext } from './context/context'



const App = () => {
  const {isLoading, products} = useGlobalContext()
  if(isLoading){
    return(
      <div>
        <Navbar />
        <section className='w-screen h-screen flex justify-center items-center'>
          <h1>Caricamento prodotti</h1>
        </section>
      </div>
    )
  }
  return (
    <div>
      <Navbar />
      {
        products.length > 0 ?
        <CartItem/> : <div className='w-screen h-36 flex justify-center items-center'><h3 className='font-semibold'>Nessun prodotto nel carrello</h3></div>
      }
      <Cart/>
      
    </div>
  )
}

export default App