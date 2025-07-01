import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = () => {
    navigate('/contact');
  };

  return (
    <nav className="bg-white shadow-md text-black w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6 md:px-20">
        {/* Logo */}
        <a href="/" className="h-14 w-24 flex-shrink-0">
          <img src={Logo} alt="logo" className="h-full w-full object-contain" />
        </a>

        {/* Desktop Menu - Hidden on mobile */}
        <ul className="hidden md:flex flex justify-between gap-6 items-center text-lg font-semibold">
          <li><a href="/about">About</a></li>
          <li><a href="/rooms">Room</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/attractions">Attractions</a></li>
          <li><a href="/payment">Payment</a></li>
          <li><a href="/contact">Contact</a></li>
          <li>
            <button
              onClick={handleNavigate}
              className="px-4 py-2 border-2 border-black bg-black text-white rounded-xl hover:bg-white hover:text-black transition duration-300"
            >
              Book Your Stay
            </button>
          </li>
        </ul>

        {/* Mobile menu icon - Hidden on desktop */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Hidden on desktop */}
      {menuOpen && (
        <div className="md:hidden bg-white w-full px-6 pt-4 pb-6 shadow-md">
          <ul className="flex flex-col gap-4 text-base font-medium">
            <li><a href="/about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="/rooms" onClick={() => setMenuOpen(false)}>Room</a></li>
            <li><a href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
            <li><a href="/attractions" onClick={() => setMenuOpen(false)}>Attractions</a></li>
            <li><a href="/payment" onClick={() => setMenuOpen(false)}>Payment</a></li>
            <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li>
              <button
                onClick={() => {
                  handleNavigate();
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-2 border-2 border-black bg-black text-white rounded-xl hover:bg-white hover:text-black transition duration-300"
              >
                Book Your Stay
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;








// import React, { useState } from 'react';
// import Logo from "../assets/logo.jpg";
// import { useNavigate } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleNavigate = () => navigate('/contact');
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <nav className='w-full bg-white shadow-md fixed top-0 left-0 z-50'>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='flex justify-between items-center h-20'>

//           {/* Logo */}
//           <div className='flex-shrink-0'>
//             <a href="/">
//               <img src={Logo} alt="logo" className='h-14 w-auto' />
//             </a>
//           </div>

//           {/* Desktop Menu */}
//           <div className='hidden md:flex items-center space-x-8 text-black font-semibold text-lg'>
//             <a href="/about" className='hover:text-gray-600 transition'>About</a>
//             <a href="/rooms" className='hover:text-gray-600 transition'>Room</a>
//             <a href="/gallery" className='hover:text-gray-600 transition'>Gallery</a>
//             <a href="/attractions" className='hover:text-gray-600 transition'>Attractions</a>
//             <a href="/payment" className='hover:text-gray-600 transition'>Payment</a>
//             <a href="/contact" className='hover:text-gray-600 transition'>Contact</a>
//             <button
//               onClick={handleNavigate}
//               className='px-5 py-2 border-2 border-black bg-black text-white rounded-xl hover:bg-white hover:text-black transition font-medium'
//             >
//               Book Your Stay
//             </button>
//           </div>

//           {/* Mobile Menu Toggle Icon */}
//           <div className='md:hidden flex items-center'>
//             <button onClick={toggleMenu} className='text-2xl text-black'>
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-white px-6 pt-4 pb-6 shadow-lg`}>
//         <ul className='flex flex-col space-y-6 text-black font-semibold text-lg'>
//           <li><a href="/about" onClick={toggleMenu}>About</a></li>
//           <li><a href="/rooms" onClick={toggleMenu}>Room</a></li>
//           <li><a href="/gallery" onClick={toggleMenu}>Gallery</a></li>
//           <li><a href="/attractions" onClick={toggleMenu}>Attractions</a></li>
//           <li><a href="/payment" onClick={toggleMenu}>Payment</a></li>
//           <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
//           <li>
//             <button
//               onClick={() => {
//                 toggleMenu();
//                 handleNavigate();
//               }}
//               className='w-full py-2 border-2 border-black bg-black text-white rounded-xl hover:bg-white hover:text-black transition font-medium'
//             >
//               Book Your Stay
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
