import React, { useContext } from 'react'
import { AppContext } from '../App'

const DropMenu = () => {

    const context = useContext(AppContext)
    console.log(context.navbarText)

  return (
    <aside className={`${context.showMenu  ? ' max-h-screen transition-all ease-in duration-300 overflow-hidden' : 'max-h-0 overflow-hidden transition-all ease-in duration-300'} `}>
        <ul className={`text-sm font-semibold p-4`}>
            {
                context.navbarText.map(text => {
                    return( 
                        <li className='p-2'>{text}</li>
                    )
                })
            }
            {/* <li className='p-2'>Home</li>
            <li className='p-2'>Chi Siamo</li>s
            <li className='p-2'>Progetti</li>
            <li className='p-2'>Contattaci</li> */}
        </ul>
    </aside>
  )
}

export default DropMenu