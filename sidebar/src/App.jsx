import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import Sidemenu from './components/Sidemenu'
import Modal from './components/Modal'

const list = ['home','chi siamo', 'progetti', 'contattaci']

export const AppContext = createContext(null)

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleMenuOpen(){
    setIsMenuOpen(!isMenuOpen)
  }

  function handleModalOpen(){
    setIsModalOpen(!isModalOpen)
  }


  return (
      <header className='bg-slate-200 h-screen '>
        <AppContext.Provider value={{list, isMenuOpen, handleMenuOpen, isModalOpen ,handleModalOpen}}>
          <Navbar />
          <button onClick={handleModalOpen} className='text-xs px-5 py-1 rounded-full shadow-xl font-semibold position absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-cyan-100 hover:scale-125 transition-all ease hover:bg-cyan-400 hover:text-white active:bg-cyan-200 active:text-black'>APRI MODAL</button>
          <Sidemenu />
          <Modal />
      </AppContext.Provider>
    </header>
  )
}

export default App