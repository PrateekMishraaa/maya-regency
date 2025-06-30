import React from 'react';
import Navbar from '../Components/Navbar';
import Naini from "../assets/nainilake.jpg";
import Naina from "../assets/nainadevi.jpg";
import Raj from "../assets/rajbhawan.jpg";
import Khur from "../assets/khurpatal.jpg";
import Eco from "../assets/eco.jpg";
import Kil from "../assets/kil.jpg";
import SnowPoint from "../assets/snow.jpg";
import House from "../assets/house.jpg";
import Footer from '../Components/Footer';

const Attractions = () => {
  const attraction = [
    {
      img: Naini,
      title: "Naini Lake",
      details:
        "Ever dreamt of an almost infinite water body surrounded by lush green mountains, pleasantly chilly breeze, chirping birds, colorful boats, mixed flora and orange-colored common carp fish looking at you from beneath the water? You must have been standing at the Naini Lake in your dream.",
    },
    {
      img: Naina,
      title: "Naina Devi Temple",
      details:
        "This sacred temple dedicated to Goddess Naina Devi is located near Naini Lake and attracts thousands of pilgrims each year. Its spiritual atmosphere and picturesque surroundings make it a must-visit attraction.",
    },
    {
      img: Raj,
      title: "Raj Bhawan",
      details:
        "The Governor House of Nainital is named as the Raj Bhawan which is a symbol of British heritage in Nainital. This British era building is now the Governor residence of Uttarakhand which once used to be the summer residence of British Governors.",
    },
    {
      img: Khur,
      title: "Khurtpal",
      details:
        "Hidden in the outer Himalayan range of the Kumaoni mountains is an emerald-colored jewel called Khurpatal Lake in the Khurpatal town. This lesser famous town is a tourist's and photographer's paradise as the emerald-colored waters of this lake offer the best pictures, with backdrop as good as a postcard.",
    },
    {
      img: Eco,
      title: "Eco Cave Garden",
      details:
        "Eco Cave Garden is a cluster of natural rocky caves which are developed into a garden. This destination is gaining popularity off-late due to its close proximity to the Nainital city also commonly known as Mall Road. The garden is maintained by Nainital Tourism and is located in the Mallital area on the Kaladungi Road.",
    },
    {
      img: Kil,
      title: "Kilbury",
      details:
        "About 13 km away from the Nainital city is the Pangot village located at a height of 6,510 ft above sea level. Pangot village is a famous tourist destination as it houses almost 580 different species of birds. The huge variety of birds is not the only attraction, the landscape amidst which Pangot is located, is the Cherry on the cake.",
    },
    {
      img: SnowPoint,
      title: "Snow Point View",
      details:
        "If you wish to witness snow-covered mountain tops emerging from clouds, offering different shades of sunlight and a mirror-like glare from far away, Snow View Point is your destination. Located just 2 km away from the Nainital city center is the Snow View Point offering its visitors an exceptional and bewitching view of the snow-covered Nanda Devi peak, Nanda Kot peak and the Trishul peak.",
    },
    {
      img: House,
      title: "Gurney House",
      details:
        "One of the meanings of Gurney is a house made from the carted remains of a broken or dismantled house. The Gurney house was constructed from the remains of a dismantled house on Alma Hill which got destroyed in a landslide, hence getting the name. The Gurney house is a cozy, old cottage which so is so naturally preserved that it gives its visitors a feel of how Jim Corbett used to live.",
    },
    // Add more attractions if needed...
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10">
        {attraction.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={item.img} alt={item.title} className="h-40 w-full object-cover rounded" />
            <p className="mt-2 font-semibold text-lg">{item.title}</p>
            <p className='text-xs font-semibold text-gray-600 italic'>{item.details}</p>
          </div>
        ))}
      </section>
      <Footer/>
    </>
  );
};

export default Attractions;
