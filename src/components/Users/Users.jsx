import React from 'react'
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
  const users = useLoaderData();

  return (
    <div className='min-h-[75vh]'>
      <h1 className='underline text-2xl font-semibold py-3 text-center'>Users Page</h1>
      <div className='grid grid-cols-3 gap-6 px-14'>
        {
          users.map((userData, idx) => <User key={idx} userData={userData}/>)
        }
      </div>
      
    </div>
  )
}

export default Users
