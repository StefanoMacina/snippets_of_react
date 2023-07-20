import React from 'react'
import cartsvg from '../assets/cart.svg'
import { IoIosCart} from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='bg-cyan-600 h-20'>
        <section className=' h-full flex items-center w-full justify-between px-4'>
            <div className=''>
                <h1 className='text-white font-bold text-lg'>Cart Shop</h1>
            </div>
            <div  className=' flex'>
                <img  src={cartsvg} alt="" width={26} />
               
                <div className='w-4 h-4 bg-amber-200 rounded-full text-center text-xs'>
                    5
                </div>
            </div>
        </section>
    </nav>
  )
}

export default Navbar