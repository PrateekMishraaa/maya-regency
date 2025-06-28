import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from "../assets/bannerimg.jpeg";
import BannerTwo from "../assets/banner2.jpeg";
import RoomOne from "../assets/room1.jpeg";
import RoomTwo from "../assets/room2.jpeg";
import RoomThree from "../assets/room3.jpeg";
import { useNavigate } from 'react-router-dom';
import ViewOne from "../assets/view.jpeg"
import ViewTwo from "../assets/view2.jpeg"
import ViewThree from "../assets/view3.jpeg"
import ViewFour from "../assets/view4.jpeg"
import ViewFive from "../assets/view5.jpeg"
import ViewSix from "../assets/view6.jpeg"
import ViewSeven from "../assets/view7.jpeg"
import ViewEight from "../assets/view8.jpeg"
import ViewNine from "../assets/view9.jpeg"
import ViewTen from "../assets/view10.jpg"
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
const HomePage = () => {
  const near=[
      {
        img:ViewSeven,
        title:"Naini Lake",
        description:"Endless lake surrounded by green moutains Cool breeze and birdsong Colorful boats and clear water Golden fish swimming below A peaceful dream spot"
      },
         {
        img:ViewEight,
        title:"Naina Devi Temple",
        description:"Colorful flags fluttering in the breezeFragrance of incense in the fresh mountain airGlimpse of the Naina Devi idol inside the shrineCalm aura and peaceful chants all aroundA divine spot for blessings and serenity"
      }
  ]
    const navigate = useNavigate()
  const aboutUs = [
    {
      img: BannerTwo,
      description:
        "At The Mannu Maharani Regency, your perfect retreat in the enchanting hills of Nainital. Nestled in the heart of this picturesque town, our hotel offers breathtaking views of the snow-capped Himalayas and the pristine Naini Lake – a haven for those seeking peace, comfort, and a touch of luxury. Come, experience Nainital like never before – only at The Mannu Maharani Regency."
    }
  ];
    const accomondations =[
        {
            img:RoomOne,
            title:"Luxary Lake View Room",
            description:"Luxary Room Lake Facing is a well appointed rooms with lake facing",
            facilities:"270 sq.ft.  Double Sized Bed .Max. 3 Adults Lake View",
            price: "7,599"
        },
        {
        img:RoomTwo,
        title:"Premium Lake View Room",
        description:"Premium Lake Facing Rooms is a well appointed rooms and balcony available and this is lake facing",
        facilities:"195sq.ft. King Sized Bed, Max. 3 Adults Lake view",
        price:"8,599"
        },
        {
            img:RoomThree,
            title:"Elegant Room",
            description:"Elegant Lake Facing is well appointed rooms with all amenities on high floor with window lake view.",
            facilities:"324sq.ft. Double Sized Bed Lake View ",
            price:"6,4999"
        }
    ]

    const gallery=[ViewOne, ViewTwo,ViewThree,ViewFour,ViewFive,ViewSix]
    const handleNavigate=()=>{
        navigate('/about')
    }
    const handleBook=()=>{
        navigate('/book-now')
    }
    const handleGallery=()=>{
            navigate('/gallery')
    }
    const handleAttraction =()=>{
      navigate("/attractions")
    }
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section className='h-[100vh] w-full p-8'>
        <div className='h-full w-full'>
          <img src={Banner} alt="banner" className='h-full w-full object-cover rounded-3xl' />
        </div>
      </section>

      {/* About Us Section */}
    <section className='min-h-[100vh] w-full p-8 bg-gray-100 relative'>
  <h2 className='text-6xl font-bold text-center mb-10 font-sans absolute  right-80 top-10'>About Us</h2>
  <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
    <img
      src={aboutUs[0].img}
      alt="About Us"
      className='w-full md:w-1/2 rounded-3xl hover:scale-95 transition-transform duration-300 cursor-pointer'
    />
    <div className='md:w-1/2 flex flex-col gap-6'>
      <p className='text-lg text-gray-700 leading-relaxed font-sans font-semibold'>
        {aboutUs[0].description}
      </p>
      <button onClick={()=>handleNavigate()} className='w-48 h-12 bg-black text-white rounded-xl cursor-pointer border-2 border-black hover:bg-white hover:text-black transition duration-300'>
      Learn More
      </button>
    </div>
  </div>
</section>
<section className='w-full p-8 bg-white'>
  <h2 className='text-5xl font-bold text-center mb-12 font-serif'>Accommodations</h2>

  <div className='flex flex-col gap-16 p-8'>
    {accomondations.map((item, index) => (
      <div key={index} className='flex flex-col md:flex-row justify-between items-center gap-8'>
        {/* Left: Text */}
        <div className='md:w-1/2 space-y-4'>
          <h3 className='text-3xl font-bold font-serif'>{item.title}</h3>
          <p className='text-gray-700 text-lg'>{item.description}</p>
          <ul className='list-disc list-inside text-gray-600'>
            {item.facilities.split('.').filter(Boolean).map((point, i) => (
              <li key={i}>{point.trim()}</li>
            ))}
          </ul>
          <p className='text-lg'>
            Start from <span className='font-bold'>Rs. {item.price} per night</span>
          </p>
          <button onClick={()=>handleBook()} className='mt-2 px-6 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black border-2 border-black transition'>
            Book Now
          </button>
        </div>

        {/* Right: Image */}
        <div className='md:w-1/2'>
          <img src={item.img} alt={item.title} className='w-full h-auto rounded-xl shadow-md' />
        </div>
      </div>
    ))}
  </div>
</section>
<section className='min-h-screen w-full p-8 bg-gray-100'>
  <h2 className='text-5xl font-bold text-center mb-12 font-serif'>Gallery</h2>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
    {gallery.map((item, index) => (
      <img
        key={index}
        src={item}
        alt={`View ${index + 1}`}
        className='w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer'
        />
    ))}
    <button onClick={()=>handleGallery()} className='h-10 w-40 border-2 border-black bg-black text-white cursor-pointer rounded-xl hover:bg-white transition hover:text-black transition'>View More</button>
  </div>
</section>
<section className='min-h-screen w-full p-8 bg-white'>
  <h2 className='text-5xl font-bold text-center mb-12 font-serif'>Nearby Attractions</h2>
  <div className='flex flex-col gap-16'>
    {near.map((item, index) => (
      <div key={index} className='flex flex-col md:flex-row items-center justify-between gap-8'>
        {/* Left: Title and Description */}
        <div className='md:w-1/2 space-y-4'>
          <h3 className='text-3xl font-bold font-serif'>{item.title}</h3>
          <p className='text-gray-700 text-lg w-96 leading-relaxed font-sans'>{item.description}</p>
  <div className='h-20 w-72 flex justify-between gap-4'>
    <button className='h-10 w-96 border-2  rounded-xl bg-black cursor-pointer text-white'>Contact</button>
   <button onClick={()=>handleAttraction()} className='h-10 w-96 border-2  rounded-xl bg-gray-800 cursor-pointer text-black'>View More</button>
  </div>
        </div>

        {/* Right: Image */}
        <div className='md:w-1/2'>
          <img
            src={item.img}
            alt={item.title}
            className='w-full h-52 object-cover rounded-xl shadow-md'
          />
        </div>
      </div>
    ))}
    <button onClick={()=>handleAttraction()} className='h-10 w-40 border-2 rounded-xl cursor-pointer bg-black text-white'>View More</button>
  </div>
</section>
    {/* <ContactForm/> */}
    {/* <section className='h-screen w-full border-2 p-8'>
      <form action="" className='h-[40vh] w-[50%] border-2'></form>
    </section> */}
    <Footer/>
    </>
  );
};

export default HomePage;
