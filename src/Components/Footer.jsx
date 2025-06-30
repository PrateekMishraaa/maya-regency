import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { BsPinterest, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white px-6 md:px-12 lg:px-20 pt-10 pb-6 font-sans bg-black">
      
      {/* Newsletter and Social Icons */}
      <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-600 pb-6 gap-6">
        <div className="text-center lg:text-left">
          {/* <h2 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h2> */}
        </div>
      
      </div>

      {/* Footer Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 text-gray-400 text-sm">
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl  font-semibold mb-4 text-white ">Contact Us</h3>
          <div className="flex items-start space-x-2 mb-4">
            <FaMapMarkerAlt className="mt-1" />
            <p>Thandi Rd, Tallital, Nainital, Uttarakhand 263002</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <FaPhone />
              <p>+91 7835834101</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone />
              <p>+91 9971855186</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone />
              <p>+91 8743000197</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <p>booking@rchronline.com</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Restaurant</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Refund & Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* TripAdvisor Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">TripAdvisor</h3>
          <p className="mb-2">Now with hotel reviews by:</p>
          <div className="text-yellow-400 text-lg">⭐️⭐️⭐️⭐️⭐️</div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Connect with us</h3>
          <div className="flex space-x-4">
            <BsPinterest className="text-xl hover:text-yellow-500" />
            <BsFacebook className="text-xl hover:text-yellow-500" />
            <BsInstagram className="text-xl hover:text-yellow-500" />
            <BsTwitter className="text-xl hover:text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-gray-400 text-sm">
        <p>&copy; 2025 Manu Maharani Regency. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
