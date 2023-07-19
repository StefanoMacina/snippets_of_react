import React, { useContext } from 'react'
import deletesvg  from "../assets/delete.svg";
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import { AppContext } from '../App';


const Sidemenu = () => {

    const {list, isMenuOpen, handleMenuOpen} = useContext(AppContext)
    
  return (
    <aside className={ `absolute top-0 w-screen h-screen bg-white  ${isMenuOpen ? 'selection:translate-x-0 transition-all ease-in' :'translate-x-[-100%] transition-all ease-in'} `}>
        <div className='mx-4 flex flex-col gap-5'>
            <section className=' flex justify-between'>
                <div className='p-4'>
                    <h4 className='font-semibold'>SideBar</h4>
                </div>
                <div onClick={handleMenuOpen} className='p-4 flex justify-center items-center'>
                    <img src={deletesvg} alt="" />
                </div>
            </section>
            <section className=' text-center'>
                <ul className='flex flex-col gap-7'>
                {
                    list.map((text) => {
                        return (
                            <li className='font-semibold text-sm hover:scale-125 transition-all ease-linear'>{text.toUpperCase()}</li>
                            )
                            })
                        }
                </ul>
            </section>
            <section className=' flex justify-center'>
                <div className='flex gap-7'>
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
                </div>
            </section>
        </div>
    </aside>
  )
}

export default Sidemenu