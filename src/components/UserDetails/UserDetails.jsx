import { NavLink, useLoaderData } from "react-router";

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);

     const {username, name, email, website, address, company, phone} = user;

    
  return (

    <div className="min-h-[75vh] flex flex-col justify-center items-center space-y-4">
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden font-sans">
        {/* Top Accent Bar */}
        <div className="h-2 bg-indigo-500"></div>
        
        <div className="p-6">
            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold">
                {name.charAt(0)}
            </div>
            <div>
                <h2 className="text-xl font-bold text-gray-800 leading-tight">{name}</h2>
                <p className="text-sm text-gray-500">@{username}</p>
            </div>
            </div>

            {/* Info List */}
            <div className="space-y-3">
            <div className="flex items-center text-gray-600 text-sm">
                <span className="w-6">📧</span>
                <span>{email}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
                <span className="w-6">📞</span>
                <span>{phone}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
                <span className="w-6">🌐</span>
                <span className="text-indigo-600 hover:underline cursor-pointer">{website}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
                <span className="w-6">🏢</span>
                <span>{company.name}</span>
            </div>
            <div className="flex items-start text-gray-600 text-sm">
                <span className="w-6">📍</span>
                <span>{address.street}, {address.city}</span>
            </div>
            </div>
        </div>
        </div>

        <NavLink>
            <button className="bg-black text-white py-1.5 px-24 rounded-lg active:scale-95 cursor-pointer">Go Back</button>
        </NavLink>
        
    </div>
  )
}

export default UserDetails
