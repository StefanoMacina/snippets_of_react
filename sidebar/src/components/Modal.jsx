import React, { useContext } from 'react'
import deletesvg from '../assets/delete.svg'
import { AppContext } from '../App'

const Modal = () => {

    const {list, isMenuOpen, handleMenuOpen, isModalOpen, handleModalOpen} = useContext(AppContext)
    
  return (
    <div className={`   ${isModalOpen ? 'transition-all ease absolute top-0 w-screen h-screen bg-black/20': 'transition-all ease hidden'}  `}>
        <aside className={`bg-white w-2/3  h-32 mx-auto relative grid items-center text-center rounded-md shadow-xl ${isModalOpen ? 'transition-all ease-in top-1/2 translate-y-[-1/2]': 'transition-all ease-out translate-y-full'}`}>
            <img onClick={handleModalOpen} className='absolute top-0 right-0' src={deletesvg} alt="" />
            <h4 className='font-semibold'>Contenuto del modal</h4>
        </aside>
    </div>
  )
}

export default Modal