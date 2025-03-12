import React from 'react'
import UserCard from '../components/UserCard';
import data from '../utils/data.jsx';
import Title from '../components/Title.jsx';
import { Navigate } from 'react-router';
export default function UserList() {
    
  return (
    <div>
      {data.map( ({user,email,rollNo}) => (
        <div>
        <Title name = {user}/>
            <UserCard  email={email} rollNo={rollNo}/>
        </div>

      ))}

      
    </div>
  )
}
