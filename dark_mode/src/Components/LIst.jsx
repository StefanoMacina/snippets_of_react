import React, { useState } from 'react'
import data from './Data'

function List() {
    const [list ,  setList] = useState(data)
 
    return(
        <section>
            {list.map((el) => {
                const {id, title , text} = el
                return (
                    <div className='card' key={id}>
                        <h2>{title}</h2>
                        <div className='Bar'></div>
                        <p>{text}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default List