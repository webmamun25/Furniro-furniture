import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaCartFlatbedSuitcase, FaUserNinja } from 'react-icons/fa6'
import logo from '../../../../assets/furniture/logo/logo.png'

const Navbar = () => {
    const Navitem=<>
            <li><a>Home</a></li>
            <li><a>Shop</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>

    </>
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {Navitem}
      </ul>
    </div>
    
        <img src={logo} alt=""  />

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {Navitem}
    </ul>
  </div>
  <div className="navbar-end ">
    <a className='mx-5'>
    <FaUserNinja  />
    </a>
    <a className='mx-5'>
    <FaSearch  />
    </a>
    <a className='mx-5'>
    <FaCartFlatbedSuitcase />
    </a>
  </div>
</div>
    </div>
  )
}

export default Navbar