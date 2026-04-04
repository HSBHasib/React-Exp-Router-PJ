import React from 'react'
import { NavLink } from 'react-router';

const User = ({userData}) => {
    console.log(userData);

    const {name, email} = userData;
    
    return (
    <div>
        <div className='p-3 border-[1.5px] border-gray-200 rounded-lg space-y-3'>
            <div>
               <h3 className='font-semibold text-lg'>I am '{name}'</h3>
               <p className='text-[15px]'>My Email is {email}</p>
            </div>
            <div className='text-center'>
                <NavLink>
                    <button className='text-sm font-semibold text-orange-400 active:scale-95 hover:underline'>Show Details</button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default User
