import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context'

const CheckTodos = () => {
    const {todoCount, completedTodos} = useGlobalContext()
    

  return (
    <section className='flex justify-center'>
        <div className=' grid grid-cols-2 gap-4 p-2 '>
        <p>total : {todoCount}</p>
        <p>completed : {completedTodos.length} </p>
        </div>
    </section>
  )
}

export default CheckTodos