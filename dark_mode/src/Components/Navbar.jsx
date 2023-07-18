import React, { useState } from 'react'

function Navbar() {

    const {show, setShow} = useState(true)

  return (
    <div className='navbar_container'>
        <div className='hamburger_menu'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Navbar