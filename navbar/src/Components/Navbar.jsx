import React, { useContext } from 'react'
import logo from '../assets/logo.7d6aa1c2.svg'
import twitter from '../assets/twitter.svg'
import facebook from'../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import  {AppContext}  from '../App';

const Navbar = () => {

const context = useContext(AppContext)

  return (
    <nav className='flex justify-between min-h-[50px] p-4 top-0 lg:justify-beetwen'>
        <div className='w-36 flex items-center justify-evenly'>
            <img src={logo} alt=""  className='w-7'/>
            <h4 className='font-semibold'>DevBar</h4>
        </div>

            <div className='hidden lg:flex lg:w-1/2 lg:justify-evenly'>
                <ul className='flex justify-evenly '>
                    {
                        context.navbarText.map((el) => {
                            return (
                                <li className='p-3'>{el}</li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className='hidden lg:flex'>
                <img src={twitter} alt="" className='px-2'/>
                <img src={facebook} alt=""  className='px-2'/>
                <img src={linkedin} alt=""  className='px-2' />
            </div>

        <div onClick={context.handleShowMenu} className={`lg:hidden ${context.showMenu ? ' transition-transform rotate-90 ease-in-out w-5 flex flex-col justify-evenly' : ' transition-transform ease-in-out w-5 flex flex-col justify-evenly'}`}>
            <div className='bg-black w-full h-1 rounded-xl'></div>
            <div className='bg-black w-full h-1 rounded-xl'></div>
            <div className='bg-black w-full h-1 rounded-xl'></div>
        </div>
    </nav>
  )
}

export default Navbar