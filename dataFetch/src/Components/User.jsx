import React from 'react'

function User({id, name, email, phone, address}) {

  return (
    <article>
        <h1>{id}</h1>
        <ul >
            <li>{name}</li>
            <li>{email}</li>
            <li>{phone}</li>
            <li>{address.street}</li>
            
        </ul>
    </article>
  )
}

export default User