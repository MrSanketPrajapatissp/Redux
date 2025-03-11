import React from 'react'

export default function UserCard({user, email, age}) {
  return (
    <div>
      <h3>{user}</h3>
      <p>{email}</p>
      <p>{age}</p>
    </div>
  )
}
