import React from 'react'
import cartsvg from '../assets/cart.svg'
import { useGlobalContext } from '../context/context'


const Navbar = () => {
    const {products, itemCounter} = useGlobalContext()
    
  return (
    <nav className='bg-cyan-600 h-20 sticky top-0 shadow-xl z-10'>
        <section className=' h-full flex items-center w-full justify-between px-4'>
            <div className=''>
                <h1 className='text-white font-bold text-lg'>Cart Shop</h1>
            </div>
            <div  className=' flex'>
                <img  src={cartsvg} alt="" width={26} />
               
                { itemCounter > 0 && <div className='w-4 h-4 bg-amber-200 rounded-full text-center text-xs'>{itemCounter}</div>}
            </div>
        </section>
    </nav>
  )
}

export default Navbar