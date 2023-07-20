import React from 'react'
import { IoIosAddCircle, IoIosAddCircleOutline, IoIosCart  } from 'react-icons/io'
import { MdDelete } from 'react-icons/md';



const Product = ({id, name, img, price}) => {
  return (
    <article className='grid grid-cols-5 mt-5'>
        <div>
            <div className='rounded-md shadow-lg'>
                <img src={img} alt="" className='p-1 rounded-lg'/>
            </div>
        </div>
        <div className=' grid items-center ml-4'>
            <p className='text-xs md:text-base lg:text-xl'>{name}</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <button className='text-green-800'><IoIosAddCircle/></button>
            <p>1</p>
            <button className='text-red-500'><IoIosAddCircleOutline/></button>
        </div>
        <div className='flex justify-center items-center'>
            <p className='text-xs md:text-base lg:text-xl'>€ {price}</p>
        </div>
        <div className='flex justify-center items-center text-red-500 lg:text-3xl'>
        <MdDelete/>
        </div>
    </article>
  )
}

export default Product