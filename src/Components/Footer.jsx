import React from 'react';
import {
  FaLocationDot,
  FaPinterest,
  FaXTwitter,
  FaWhatsapp
} from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
import { CiMail, CiFacebook } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';
import { MdCall } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm py-8">
        
        {/* Contact Info */}
        <div className='px-10'>
          <h2 className="text-2xl font-semibold mb-4 text-red-600 px-6">Contact Us</h2>
          <div className="flex items-start gap-2 mb-3">
            <FaLocationDot className="text-red-600 mt-4" />
            <p className='mt-4'>Thandi Rd, Tallital, Nainital, Uttarakhand 263002</p>
          </div>
          {[
            { phone: "+917835834101" },
            { phone: "+919971855186" },
            { phone: "+918743000197" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 mb-2 space-y-4">
              <IoIosCall className="text-red-600" />
              <a href={`tel:${item.phone}`} className="text-gray-400 hover:text-white">
                {item.phone}
              </a>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <CiMail className="text-red-600" />
            <a href="mailto:booking@rchronline.com" className="text-gray-400 hover:text-white">
              booking@rchronline.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        {/* Quick Links */}
<div>
  <h2 className="text-2xl font-semibold mb-4 text-red-600">Quick Links</h2>
  <div className="flex flex-col gap-2 space-y-6">
    {[
      "Home",
      "About",
      "Restaurant",
      "Contact",
      "Refund & Cancellation Policy",
      "Privacy Policy"
    ].map((link, i) => (
      <a key={i} href="#" className="text-gray-400 hover:text-white">
        {link}
      </a>
    ))}
  </div>
</div>


        {/* TripAdvisor */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-red-600">TripAdvisor</h2>
          <p className="text-gray-400 mb-2">Now with hotel reviews by</p>
          <a href="#" className="text-blue-400 hover:text-white underline">TripAdvisor</a>
        </div>

        {/* Social Icons */}
        <div className='px-10'>
          <h2 className="text-lg font-semibold mb-4 text-red-600">Connect with Us</h2>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-red-600"><FaPinterest /></a>
            <a href="#" className="hover:text-blue-600"><CiFacebook /></a>
            <a href="#" className="hover:text-pink-500"><BsInstagram /></a>
            <a href="#" className="hover:text-white"><FaXTwitter /></a>
          </div>
        </div>

        {/* WhatsApp & Call */}
     <div className="absolute right-20 top-0 lg:static">
    <h2 className="text-lg font-semibold mb-4 text-red-600 mr-10">Support</h2>
    <div className="flex gap-4 items-center mr-4">
      <a
        href="https://api.whatsapp.com/send?phone=917835834101&text=Hello!%20I%20have%20a%20query%20regarding%20Manu%20Maharani%20Regency."
        className="text-3xl hover:text-green-500 mr-10"
      >
        <FaWhatsapp />
      </a>
      <a href="tel:+917835834101" className="text-xl hover:text-white mr-10">
        <MdCall />
      </a>
    </div>
  </div>
</div>

      {/* Footer Bottom Note */}
      <div className="text-center mt-10 text-gray-500 text-xs border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Manu Maharani Regency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
