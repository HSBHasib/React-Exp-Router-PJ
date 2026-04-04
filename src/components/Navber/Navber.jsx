import React from 'react'
import { Link, NavLink } from 'react-router'

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-200 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 3</a></li>
                <li><a>Item 1</a></li>
                <li><a>Item 3</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl">Exp-Router</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><NavLink to='/' className={({ isActive }) => isActive && "text-red-700 font-bold border-b-2 border-red-700"}>Home</NavLink></li>

                <li><NavLink to='/about' className={({ isActive }) => isActive && "text-red-700 font-bold border-b-2 border-red-700"}>About</NavLink></li>

                <li><NavLink to='/product' className={({ isActive }) => isActive && "text-red-700 font-bold border-b-2 border-red-700"}>Product</NavLink></li>

                <li><NavLink to='/users' className={({ isActive }) => isActive && "text-red-700 font-bold border-b-2 border-red-700"}>Users</NavLink></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn rounded-xl border-[1.5px] border-gray-300 transition-all duration-100 active:scale-95 hover:bg-blue-200">Back Home</a>
        </div>
        </div>
    </div>
  )
}

export default Navber
