import React from 'react';
import Navbar from '../Components/Navbar';
import ViewOne from "../assets/view.jpeg";
import ViewTwo from "../assets/view2.jpeg";
import ViewThree from "../assets/view3.jpeg";
import ViewFour from "../assets/view4.jpeg";
import ViewFive from "../assets/view5.jpeg";
import ViewSix from "../assets/view6.jpeg";
import ViewSeven from "../assets/view7.jpeg";
import ViewEight from "../assets/view8.jpeg";
import ViewNine from "../assets/view9.jpeg";
import ViewTen from "../assets/view10.jpg";
import ViewEleven from "../assets/view11.jpeg";
import ViewTwelve from "../assets/view12.jpeg";
import ViewThirteen from "../assets/view13.jpg";
import ViewFourtheen from "../assets/view14.jpg";
import ViewFithteen from "../assets/view15.jpg";
import ViewSixtheen from "../assets/view16.jpg";
import ViewSeventeen from "../assets/view17.jpg";
import ViewEightteen from "../assets/view18.jpg";
import ViewNineTeen from "../assets/view19.jpg";
import ViewTwenty from "../assets/view20.jpeg";
import ViewTwentyone from "../assets/view21.jpeg";
import ViewTwentyTwo from "../assets/view22.jpeg";
import ViewTwentyThree from "../assets/view23.jpg";
import Footer from '../Components/Footer';

const Gallery = () => {
  const images = [
    ViewEleven, ViewTwentyThree, ViewThree, ViewFour, ViewFive, ViewSix, ViewSeven, ViewEight, ViewNine,
    ViewTen, ViewEleven, ViewTwelve, ViewThirteen, ViewFourtheen, ViewFithteen, ViewSixtheen,
    ViewSeventeen, ViewEightteen, ViewNineTeen, ViewTwenty, ViewTwentyone, ViewTwentyTwo, ViewTwentyThree
  ];

  return (
    <>
      <Navbar />
      <section className='min-h-screen w-full p-8 bg-white'>
        <h2 className='text-5xl font-bold text-center mb-12 font-serif'>Gallery</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {images.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Gallery ${index + 1}`}
              className='w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer'
            />
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Gallery;
