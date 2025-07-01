import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import Banner from "../assets/bannerimg.jpeg";
import BannerTwo from "../assets/banner2.jpeg";
import RoomOne from "../assets/room1.jpeg";
import RoomTwo from "../assets/room2.jpeg";
import RoomThree from "../assets/room3.jpeg";
import ViewOne from "../assets/view.jpeg";
import ViewTwo from "../assets/view2.jpeg";
import ViewThree from "../assets/view3.jpeg";
import ViewFour from "../assets/view4.jpeg";
import ViewFive from "../assets/view5.jpeg";
import ViewSix from "../assets/view6.jpeg";
import ViewSeven from "../assets/view7.jpeg";
import ViewEight from "../assets/view8.jpeg";
import Naini from "../assets/nainilake.jpg"
import Naina from "../assets/nainadevi.jpg"
import ViewTwenty from "../assets/view23.jpg"
const HomePage = () => {
  const navigate = useNavigate();

  const near = [
    {
      img: Naini,
      title: "Naini Lake",
      description:
        "Endless lake surrounded by green mountains, cool breeze and birdsong. Colorful boats and clear water. Golden fish swimming below. A peaceful dream spot."
    },
    {
      img: Naina,
      title: "Naina Devi Temple",
      description:
        "Colorful flags fluttering in the breeze. Fragrance of incense in the fresh mountain air. Glimpse of the Naina Devi idol inside the shrine. Calm aura and peaceful chants all around. A divine spot for blessings and serenity."
    }
  ];

  const aboutUs = [
    {
      img: BannerTwo,
      description:
        "At The Mannu Maharani Regency, your perfect retreat in the enchanting hills of Nainital. Nestled in the heart of this picturesque town, our hotel offers breathtaking views of the snow-capped Himalayas and the pristine Naini Lake – a haven for those seeking peace, comfort, and a touch of luxury.At The Mannu Maharani Regency, your perfect retreat in the enchanting hills of Nainital. Nestled in the heart of this picturesque town, our hotel offers breathtaking views of the snow-capped Himalayas and the pristine Naini Lake – a haven for those seeking peace, comfort, and a touch of luxury."
    }
  ];

  const accommodations = [
    {
      img: RoomOne,
      title: "Luxury Lake View Room",
      description: "Luxury Room Lake Facing is a well appointed room with lake facing.",
      facilities: "270 sq.ft. Double Sized Bed. Max. 3 Adults. Lake View",
      price: "7,599"
    },
    {
      img: RoomTwo,
      title: "Premium Lake View Room",
      description: "Premium Lake Facing Rooms are well-appointed with balconies and lake view.",
      facilities: "195 sq.ft. King Sized Bed. Max. 3 Adults. Lake View",
      price: "8,599"
    },
    {
      img: RoomThree,
      title: "Elegant Room",
      description: "Elegant Lake Facing rooms with all amenities on high floor with lake view.",
      facilities: "324 sq.ft. Double Sized Bed. Lake View",
      price: "6,499"
    }
  ];

  const gallery = [ViewOne, ViewTwenty, ViewThree, ViewFour, ViewFive, ViewSix];

  const handleNavigate = () => navigate('/about');
  const handleBook = () => navigate('/book-now');
  const handleGallery = () => navigate('/gallery');
  const handleAttraction = () => navigate('/attractions');

  return (
  <>
    <div className='overflow-x-hidden'>
      <Navbar />

      {/* Banner Section */}
      <section className='h-screen w-full p-4 sm:p-6 md:p-8'>
        <img src={Banner} alt="banner" className='h-full w-full object-cover rounded-3xl shadow-xl' />
      </section>

      {/* About Us Section */}
    {/* About Us Section */}
<section className='w-full px-4 sm:px-10 py-16 bg-gray-100'>
  {/* <h2 className='text-4xl sm:text-5xl font-bold text-center mb-12 font-sans text-black'>
    About Us
  </h2> */}
  <div className='flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto'>
    <img
      src={aboutUs[0].img}
      alt="About Us"
      className='w-full md:w-1/2 rounded-3xl shadow-lg hover:scale-95 transition duration-300 cursor-pointer'
    />
    <div className='md:w-1/2 flex flex-col gap-6'>
      <p className='text-lg text-gray-700 leading-relaxed font-medium'>
        {aboutUs[0].description}
      </p>
      <button
        onClick={handleNavigate}
        className='w-48 h-12 bg-black text-white rounded-xl border-2 border-black hover:bg-white hover:text-black transition'
      >
        Learn More
      </button>
    </div>
  </div>
</section>


      {/* Accommodations Section */}
      <section className='w-full px-20   bg-white'>
        <h2 className='text-3xl sm:text-4xl font-bold text-center  mb-10 font-serif py-8'>Accommodations</h2>
        <div className='flex flex-col gap-16 max-w-6xl mx-auto'>
          {accommodations.map((item, index) => (
            <div key={index} className='flex flex-col md:flex-row justify-between items-start gap-8 mb-4'>
              {/* Left: Text */}
              <div className='md:w-1/2 space-y-4'>
                <h3 className='text-2xl sm:text-3xl font-bold font-serif'>{item.title}</h3>
                <p className='text-gray-700 text-lg'>{item.description}</p>
                <ul className='list-disc list-inside text-gray-600'>
                  {item.facilities.split('.').filter(Boolean).map((point, i) => (
                    <li key={i}>{point.trim()}</li>
                  ))}
                </ul>
                <p className='text-lg'>
                  Start form <span className='font-bold'>Rs. {item.price} per night</span>
                </p>
                <button
                  onClick={handleBook}
                  className='mt-2 px-6 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black border-2 border-black transition'
                >
                  Book Now
                </button>
              </div>

              {/* Right: Image */}
              <div className='md:w-1/2'>
                <img src={item.img} alt={item.title} className='w-full h-80 object-cover rounded-xl shadow-md' />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className='w-full px-4 py-20 bg-gray-100 relative top-20'>
        <h2 className='text-4xl sm:text-5xl font-bold text-center mb-10 font-serif p-8'>Gallery</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8 px-20'>
          {gallery.map((item, index) => (
            <img key={index} src={item} alt={`View ${index + 1}`} className='w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300 cursor-pointer' />
          ))}
        </div>
        <div className='text-center mt-4'>
          <button onClick={handleGallery} className=' cursor-pointer h-10 w-40 border-2 border-black bg-black text-white rounded-xl hover:bg-white hover:text-black transition mt-4'>
            View More
          </button>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className='w-full px-20 mt-4 bg-white'>
        <h2 className='text-4xl sm:text-5xl font-bold text-center mb-12 font-serif text-black'>Nearby Attractions</h2>
        <div className='flex flex-col gap-16 max-w-6xl mx-auto mt-20'>
          {near.map((item, index) => (
            <div key={index} className='flex flex-col md:flex-row items-center gap-8'>
              <div className='md:w-1/2 space-y-4'>
                <h3 className='text-2xl sm:text-3xl font-bold font-serif'>{item.title}</h3>
                <p className='text-gray-700 text-lg leading-relaxed'>{item.description}</p>
                <div className='flex gap-4 '>
                  <button className='h-10 px-6 border-2 rounded-xl bg-black text-white'>Contact</button>
                  <button onClick={handleAttraction} className='h-10 px-6 border-2 rounded-xl  bg-white text-black border-black hover:bg-black hover:text-white transition'>
                    View More
                  </button>
                </div>
              </div>
              <div className='md:w-1/2'>
                <img src={item.img} alt={item.title} className='w-full h-52 object-cover rounded-xl shadow-md' />
              </div>
            </div>
          ))}
          <div className='text-center py-8'>
            <button onClick={handleAttraction} className=' cursor-pointer h-10 w-40 border-2 rounded-xl bg-black text-white '>
              View More
            </button>
          </div>
        </div>
      </section>

     
    </div>
    <Footer/>
  </>
  );
};

export default HomePage;
