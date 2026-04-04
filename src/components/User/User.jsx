import { NavLink } from 'react-router';

const User = ({userData}) => {
    const {id, name, email} = userData;
    
    return (
    <div>
        <div className='p-3 border-[1.5px] border-gray-200 rounded-lg space-y-3'>
            <div>
               <h3 className='font-semibold text-lg'>Name: '{name}'</h3>
               <p className='text-[15px]'>Email: {email}</p>
            </div>
             
            <div className='text-center'>
                <NavLink to={`/users/${id}`}>
                    <button className='text-sm font-semibold text-orange-400 active:scale-95 hover:underline'>Show Details</button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default User
