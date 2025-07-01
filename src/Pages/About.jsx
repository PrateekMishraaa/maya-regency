import React from 'react';
import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
import ParkImg from "../assets/park.jpeg";
import ParkTwo from "../assets/park2.jpeg";

const About = () => {
  const about = [
    {
      // img: ParkImg,
      description:
        "Located in the tranquil hills of Nainital, Mannu Maharani Regency offers a serene escape with stunning views of the iconic Naini Lake. Blending modern comfort with timeless elegance, our hotel is designed to provide an unforgettable experience for every guest. Whether you're seeking a romantic retreat, a family vacation, or a peaceful business stay, Mannu Maharani Regency is the perfect destination. Enjoy our luxurious accommodations, warm hospitality, and personalized services — all just moments away from Nainital's top attractions. Come, relax, and experience the charm and beauty of the mountains with us."
    }
  ];

  const statics = [
    { number: "768", rooms: "Guest Stay" },
    { number: "632", rooms: "Book Room" },
    { number: "1024", rooms: "Member Stay" },
    { number: "256", rooms: "Meals Served" },
  ];

  const about2 = [
    {
      description:
        "Manu Maharani Regency in Nainital is a luxurious hotel that offers an unparalleled experience of hospitality and comfort. Nestled amidst the picturesque mountains of Nainital, this hotel is one of the most sought-after destinations for tourists from all around the world. The hotel boasts of state-of-the-art amenities and facilities that cater to the needs of every guest. Manu Maharani Regency in Nainital is known for its spacious and well-appointed rooms that exude warmth and comfort. Each room is designed to perfection and comes equipped with modern amenities that ensure a comfortable stay. The hotel also houses a range of restaurants that offer a variety of cuisine from around the world. From Indian to Continental, the restaurants at Manu Maharani Regency in Nainital cater to the discerning taste buds of every guest.",
      // img: ParkTwo,
    }
  ];

  return (
    <>
      <Navbar />

      {/* About Us Section */}
      <section className="bg-white py-8 px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-6">
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              {about[0].description}
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            {/* <img
              src={about[0].img}
              alt="Nainital"
              className="w-[260px] lg:w-[320px] h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            /> */}
          </div>
        </div>
      </section>

      {/* Hotel Statistics */}
    

      {/* Why Guests Choose Us */}
      <section className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-start gap-6">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            {/* <img
              src={about2[0].img}
              alt="Hotel"
              className="w-[260px] lg:w-[320px] h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            /> */}
          </div>
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
              Why Guests Choose Us
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed text-justify">
              {about2[0].description}
            </p>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default About;
