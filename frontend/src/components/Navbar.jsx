import { NavLink } from "react-router-dom"
import logo from '../assets/logo.jpeg'
import { FiShoppingCart, FiMenu ,FiArrowLeft} from "react-icons/fi"
import { FaUserCircle} from 'react-icons/fa'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from "react"
import { useAuth } from "../context/Authcontext"
function Navbar() {
  const navigate = useNavigate();
  const [visible , setVisible]= useState(false);
  const { isLoggedIn, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate('/login');
}
  return (
    <div className='flex items-center w-full'>
    <img src={logo} alt="Logo" className="h-20 w-28 ml-4 " />
    <div className=' flex items-center justify-start  gap-8 py-4 bg-black w-full rounded-md'>
      <ul className=' hidden sm:flex  gap-6 lg:gap-[55px] text-white text-[20px]  md:ml-16'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/posters">Posters</NavLink></li>
        <li><NavLink to="/gamedvdcover">Game DVD Cover</NavLink></li>
        <li><NavLink to="/contactus">Contact Us</NavLink></li>
      </ul>
      <div className='flex  items-center  gap-4 sm:gap-6 text-2xl ml-auto px-12 text-white '>
        <Link to="/cart"><FiShoppingCart/></Link>
        <div className=' group relative'>
          <FaUserCircle className='text-[30px] cursor-pointer ' />
          <div className='  w-30 absolute top-full right-0 bg-white shadow-md rounded-md p-2 hidden group-hover:block dropdown-menu'>
            <ul className='  w-50 flex flex-col gap-2 '>
              {isLoggedIn?(
              <>
              <li className ='text-black text-[20px]' ><Link to="/myprofile"> My Profile</Link></li>
              <li className ='text-black text-[20px] cursor-pointer' onClick={handleLogout}>Logout</li>
              </>
              ): (
                <li  className='text-black  text-[19px] hover:text-amber-800'><Link to="/login">Login</Link></li>
              )}

              <li className ='text-black text-[19px] hover:text-amber-800'><Link to="/orders">Orders</Link></li>
            </ul>
          </div> 
        </div>
        <FiMenu  onClick={()=> setVisible(true)}className='text-white text-3xl sm:hidden'/>
          </div>
          <div className={`fixed top-0 right-0 bottom-0  z-[9999] overflow-hidden bg-white transition-all ${visible ? 'w-screen h-screen': 'w-0'}`}>
            <div className='fle flex-col text-black'>
              <div  onClick={()=> setVisible(false)}className='flex items-center gap-5 p-4'>
              <FiArrowLeft/>
              <p>Back</p>
              </div>
              <div className="flex flex-col items-center gap-0 ">
              <NavLink onClick={()=> setVisible(false)} className='py-2 pl-4 w-full h-14 border shadow-md text-center hover:text-amber-800' to='/'>HOME</NavLink>
              <NavLink onClick={()=> setVisible(false)} className='py-2 pl-4 w-full h-14 border shadow-md text-center hover:text-amber-800' to='/posters'>POSTERS</NavLink>
              <NavLink onClick={()=> setVisible(false)} className='py-2 pl-4 w-full h-14 border shadow-md text-center hover:text-amber-800' to='/gamedvdcover'>GAME DVD COVER</NavLink>
              <NavLink onClick={()=> setVisible(false)} className='py-2 pl-4 w-full h-14 border shadow-md text-center hover:text-amber-800' to='/contactus'>CONTACT US</NavLink>
              </div>
              
            </div>
          </div>
      </div>
      </div>
  )
}

export default Navbar