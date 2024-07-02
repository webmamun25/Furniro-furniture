import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaCartFlatbedSuitcase, FaUserNinja } from 'react-icons/fa6'
import logo from '../../../../assets/furniture/logo/logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../Providers/AuthProviders'

const Navbar = () => {
  const {user,loading,logoutUser}=useContext(AuthContext)
   console.log(user)
   const Navitem=<>
            <li> <Link to='/'>Home</Link>  </li>
            <li> <Link to='/furniture'>Shop</Link> </li>
            <li> <Link>About</Link> </li>
            <li> <Link>Contact</Link> </li>
            <li><Link to='/signup'>Signup</Link></li>
            {
              user?.email? <li><button className='bg-red-300 text-white' onClick={()=>{
                logoutUser()
            }} >Logout</button></li>:        <li><Link to='/signin'>Signin</Link></li>
            }
    

           
            

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
    
    <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}><FaUserNinja  /></button>
    <dialog id="my_modal_2" className="modal">
  <div className="modal-box">
  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>{user?.displayName}</div>
      <div className="font-medium truncate">{user?.email}</div>
    </div>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      {
        user?.email=='titu@mir.com'?<>
        <li>
        <Link to="/admindashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
        </>:<><li>
        <Link to="/userdashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li></>
      }
    
      {
        user?.email=="titu@mir.com"?'':<>
        
        <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <Link to="furniture/myorder" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Order</Link>
      </li>
        </>
      }
      
    </ul>
   
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>

  </div>
</dialog>

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