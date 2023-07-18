import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar'
import DropMenu from './Components/DropMenu'


export const AppContext = createContext(null)

const App = () => {

  const [showMenu, setShowMenu ] = useState(false)

  function handleShowMenu(){
     setShowMenu(!showMenu)
     console.log(showMenu);
  }

  const navbarText = ['Home','Chi Siamo', 'progetti' , 'Contattaci', 'Prodotti']


  return (
    <>
    <AppContext.Provider value={{showMenu, handleShowMenu, navbarText}}>
      <Navbar/>
      <DropMenu/>
    </AppContext.Provider>
    <div className='bg-slate-200 w-screen h-screen'>
    </div>
    </>
  )
}

export default App