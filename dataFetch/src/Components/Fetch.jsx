import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'
const url = "https://jsonplaceholder.typicode.com/users"


function Fetch() {
    const [data, setData] = useState([])
    const [count, setCount] = useState("")

    const fetchData = async () => {
        const rsp = await axios.get(url)
        setData(rsp.data)
        setCount(rsp.data.length)
    }

    const handleDelete = (id) => {
        const newData = data.filter((el) => el.id !== id)
        setData(newData)
        setCount(newData.length)
    }

  
  return (
    <section>
        <button onClick={fetchData}>click to fetch</button>
        <h1>{count > 0 ? count : "There is no data"}</h1>
        {
            data.map((el) => {
                return (
                    <section key={el.id}>
                        <User {...el}  />
                        <button onClick={() => handleDelete(el.id)}>DELETE</button>
                        <hr />
                    </section>
                )
            })
        }
    </section>
  )
}

export default Fetch