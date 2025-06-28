import React from 'react'
import Logo from "../assets/logo.jpg"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleNavigate=()=>{
    navigate('/book-now')
  }
  return (
    <>
      <nav className='h-20 w-full flex justify-between items-center text-white bg-white shadow-md'>
        <div className='px-20 h-14 '>
          <img src={Logo} alt="logo" className='h-full w-full' />
        </div>

        <div className='h-full w-[70%]'>
          <ul className='h-full w-full gap-6 flex justify-between items-center text-black font-semibold font-sans text-xl px-20 py-3'>
            <li><a href="/about">About</a></li>
            <li><a href="">Room</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/attractions">Attractions</a></li>
            <li><a href="">Payment</a></li>

            {/* Move the button here */}

            <li><a href="">Contact</a></li>
            <li>
              <button onClick={()=>handleNavigate()} className='h-12 w-46 text-xl  cursor-pointer border-black border-2 rounded-xl bg-black text-white font-sans font-light'>
                Book Your Stay
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
