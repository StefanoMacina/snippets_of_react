import React, { useContext } from 'react'
import { AppContext } from '../App'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'

const Navbar = () => {

    const {list, isMenuOpen, handleMenuOpen} = useContext(AppContext)

  return (
    <nav className='w-screen h-14 flex justify-between bg-white shadow-lg'>

        <div className='h-full flex items-center p-3 '>
            <h4 className='font-semibold'>Navbar</h4>
        </div>
        <div className='hidden lg:block'>
            <ul className='flex items-center h-full gap-14'>
                {
                    list.map((el) => {
                        return(
                            <li>{el.toUpperCase()}</li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='hidden lg:flex p-4 gap-3'>
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
        </div>
        <div onClick={handleMenuOpen} className={`h-full  lg:hidden flex justify-center flex-col gap-[2px] p-4 ${isMenuOpen ? 'transition-all ease rotate-90' : 'transition-all ease'}`}>
            <div className={`w-5 h-1 bg-black rounded-xl ${isMenuOpen && 'bg-cyan-400'}`}></div>
            <div className={`w-5 h-1 bg-black rounded-xl ${isMenuOpen && 'bg-cyan-400'}`}></div>
            <div className={`w-5 h-1 bg-black rounded-xl ${isMenuOpen && 'bg-cyan-400'}`}></div>
        </div>
        
    </nav>
  )
}

export default Navbar