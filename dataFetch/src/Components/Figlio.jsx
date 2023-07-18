import React, { useEffect } from 'react'

const Figlio = ({callback}) => {

const handleCB = () => {
  const data = 'dati dal figlio al padre'
  callback(data)
}

useEffect(() => {
  handleCB()
}, [])

  return (
    <div>
      
    </div>
  )
}

export default Figlio