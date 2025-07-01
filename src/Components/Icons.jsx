import React from 'react';
import Phone from "../assets/phone.svg";
import whatsapp from "../assets/whatsapp.svg";

const Icons = () => {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">
      {/* Phone Icon */}
      <a
        href="tel:917835834101"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 rounded-full h-10 w-10 flex items-center justify-center shadow-md hover:scale-5 transition"
      >
        <img src={Phone} alt="Call" className="h-5 w-5" />
      </a>

      {/* WhatsApp Icon */}
      <a
        href="https://api.whatsapp.com/send?phone=917835834101&text=Hello!%20I%20have%20a%20query%20regarding%20Manu%20Maharani%20Regency."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 rounded-full h-10 w-10 flex items-center justify-center shadow-md hover:scale-105 transition"
      >
        <img src={whatsapp} alt="WhatsApp" className="h-5 w-5" />
      </a>
    </div>
  );
};

export default Icons;
