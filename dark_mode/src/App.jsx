import React, { useState } from 'react'
import List from './Components/LIst'
import './styles/style.css'
import Navbar from './Components/Navbar'

function App() {
  const [theme, setTheme] = useState('dark')

  const handleTheme = () => {
    setTheme(curr => curr === 'dark' ? 'light' : 'dark')
  }

  return (
    <main id={theme}>
      <Navbar />
      <button onClick={handleTheme} className='changeBtn' >CAMBIA</button>
      <List className='list_container' />
    </main>
  )
}

export default App