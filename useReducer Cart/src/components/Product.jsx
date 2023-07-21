import React from 'react'
import { IoIosAddCircle, IoIosAddCircleOutline  } from 'react-icons/io'
import { MdDelete } from 'react-icons/md';
import { useGlobalContext } from '../context/context';
import { AiOutlineMinusCircle } from 'react-icons/ai'



const Product = ({_id, name, image, price, qty,countInStock}) => {
    const {deleteOneItem, increaseQty, decreaseQty} = useGlobalContext()

    const addQtyCountInStock = (_id) => {
        if(qty + 1 > countInStock){
            return
        }
        return increaseQty(_id)
    }

    const removeQtyInStock = (_id) => {
        if(qty  === 1){
            return deleteOneItem(_id)
        }
        decreaseQty(_id)
    }

  return (
    <article className='grid grid-cols-5 mt-5'>
        <div>
            <div className='rounded-md shadow-lg'>
                <img src={image} alt="" className='p-1 rounded-lg'/>
            </div>
        </div>
        <div className=' grid items-center ml-4'>
            <p className='text-xs md:text-base lg:text-xl'>{name}</p>
            <h1 className={`font-semibold text-xs md:text-base lg:text-xl ${qty === countInStock && 'text-red-600'}`}>in stock: {countInStock}</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <button onClick={() => addQtyCountInStock(_id)} className='text-green-800'><IoIosAddCircle/></button>
            <p>{qty}</p>
            <button onClick={() => removeQtyInStock(_id) } className='text-red-500'><AiOutlineMinusCircle/></button>
        </div>
        <div className='flex justify-center items-center'>
            <p className='text-xs md:text-base lg:text-xl'>€ {price}</p>
        </div>
        <button onClick={() => deleteOneItem(_id)} className='flex justify-center items-center text-red-500 lg:text-3xl active:scale-110'>
        <MdDelete/>
        </button>
    </article>
  )
}

export default Product