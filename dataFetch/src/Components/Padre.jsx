import React, { useState } from 'react'
import Figlio from './Figlio'

const Padre = () => {
  const [data, setData] = useState('')

  const handleData = datas => {
    setData(datas)
  }

  return (
    <div>
      <Figlio callback={handleData} />
      {!data ? <h1>there is no data</h1> : data}
    </div>
  )
}

export default Padre