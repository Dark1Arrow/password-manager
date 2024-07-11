import React from 'react'
import logo from '/logo.svg'
import Home from '/Home.svg'
import Key from '/Key.svg'
import lock from '/lock.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div>
      <nav className=' flex lg:flex-col flex-row gap-1 lg:gap-5 justify-center items-center w-full'>
        <div className='flex justify-center border rounded-b-xl border-[#00354A] bg-[#0C2129]  w-full lg:h-[200px] h-30'>
            <img  className='lg:w-[150px] w-[20%] p-1 lg:p-5' src={logo} alt="" />
        </div>
        <div className="flex py-7 justify-start border rounded-s-xl border-[#00354A] bg-[#0C2129]  w-full lg:h-[69vh] h-30">
            <ul className='flex lg:flex-col flex-row justify-start gap-5 text-xl w-16 lg:mx-20 mx-2' >
                <li className='hover:font-bold flex justify-start items-center text-white gap-5'><img src={Home} className='lg:inline hidden' alt="" /><Link to="/">Home</Link></li>
                <li className='hover:font-bold flex justify-start items-center text-white gap-5'><img src={Key} className='lg:inline hidden' alt="" /><Link to="/Create-password">Create</Link></li>
                <li className='hover:font-bold flex justify-start items-center text-white gap-5'><img src={lock} className='lg:inline hidden' alt="" /><Link to="/Passwords">Passwords</Link></li>
            </ul>
            <div className='lg:left-6 absolute lg:bottom-5 bottom-5 text-[#b0b0b0] text-[15px]'>© 2024 Apass . All rights reserved.</div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
