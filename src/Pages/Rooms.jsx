import React from 'react';
import Navbar from '../Components/Navbar';
import RoomOne from "../assets/room1.jpeg";
import RoomTwo from "../assets/room2.jpeg"
import RoomThree from "../assets/room3.jpeg"
import RoomFour from "../assets/room4.jpeg"
import Footer from '../Components/Footer';

const Rooms = () => {
  const rooms = [
    {
      img: RoomOne,
      title: "Luxury Lake View Room",
      price: "₹7,599",
      details: "Luxury Room Lake Facing is a well-appointed room with lake view.",
      facilities: "270 sq.ft. • Double Sized Bed • Max. 3 Adults • Lake View",
      description: "Experience unmatched comfort and elegance in our Luxury Lake View Room, where breathtaking panoramic views of the serene lake meet sophisticated design. This spacious room features plush bedding, elegant furnishings, and floor-to-ceiling windows that frame the tranquil waters of the lake — perfect for a peaceful retreat or a romantic getaway. Enjoy modern amenities such as high-speed Wi-Fi, a smart TV, minibar, premium toiletries, and 24-hour room service. Whether sipping your morning coffee on the private balcony or unwinding after a day of exploration, this room promises a stay that's both relaxing and indulgent."
    },
    {
      img: RoomTwo,
      title: "Premium Lake View Room",
      price: "₹8,599",
      details: "Premium Lake Facing Room is Well appointed rooms and balcony available and this is lake facing room...",
      facilities: "195 sq.ft. King Sized Bed Max. 3 Adults Lake view",
      description: "Indulge in the perfect blend of comfort and natural beauty with our Premium Lake View Room. Thoughtfully designed for a luxurious stay, this room offers stunning views of the tranquil lake right from your window or private balcony. Enjoy stylish interiors, a plush king-sized bed, modern amenities, and a calming ambiance that enhances your stay. Whether you're relaxing with a book or watching the sunset over the water, every moment in this room is designed to be serene and unforgettable."
    },
    {
      img: RoomThree,
      title: "Elegant Room",
      price: "₹6,499",
      details: "Elegant Lake Facing is well appointed rooms with all amenities on high floor with window lake view.",
      facilities: "324 sq.ft. Double Sized Bed. Max. 3 Adults. Lake View",
      description: "Step into timeless charm and refined comfort in our Elegant Room. Designed with tasteful décor and soothing tones, this room offers a warm and welcoming ambiance ideal for both leisure and business travelers. Featuring a cozy queen or king-sized bed, modern furnishings, soft lighting, and all essential amenities, it's the perfect space to unwind and recharge. Whether you're staying for a short escape or a longer retreat, the Elegant Room promises a relaxing and stylish experience."
    },
    {
      img: RoomFour,
      title: "Family InterConnected Room",
      price: "₹11,499",
      details: "Family Suite Room is a Well appointed rooms and balcony available and this is lake facing room.",
      facilities: "195 sq.ft. King Sized Bed. Max. 3 Adults. Lake View from Balcony",
      description: "Enjoy the perfect blend of space, privacy, and togetherness in our Family Interconnected Room. Designed with families in mind, this accommodation features two spacious rooms connected by an interior door — allowing parents and children to stay close while enjoying their own space. Each room is equipped with comfortable beds, modern amenities, separate bathrooms, and cozy seating areas. Ideal for family vacations or group stays, the Family Interconnected Room ensures comfort, convenience, and quality time for everyone."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Main Content Section */}
      <section className="min-h-screen w-full py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-serif text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-gray-900 leading-tight">
            Our Rooms
          </h2>

          {/* Rooms Grid */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            {rooms.map((item, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl sm:rounded-2xl overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } max-w-6xl mx-auto`}
              >
                {/* Room Image */}
                <div className="w-full lg:w-1/2 relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* Price Badge for Mobile */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-600 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full lg:hidden">
                    <span className="text-xs sm:text-sm font-bold">{item.price}</span>
                  </div>
                </div>

                {/* Room Content */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                  <div className="flex-grow">
                    {/* Room Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-800 leading-tight">
                      {item.title}
                    </h3>
                    
                    {/* Room Details */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                      {item.details}
                    </p>
                    
                    {/* Facilities */}
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                        {item.facilities}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-none">
                      {item.description}
                    </p>
                  </div>

                  {/* Price and Booking Section */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 pt-4 border-t border-gray-100">
                    {/* Price */}
                    <div className="text-center sm:text-left">
                      <p className="text-sm sm:text-base text-gray-500 mb-1">Starts From</p>
                      <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700">
                        {item.price}
                        <span className="text-xs sm:text-sm font-normal text-gray-500 ml-1">per night</span>
                      </p>
                    </div>
                    
                    {/* Book Now Button */}
                    <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gray-900 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-gray-800 active:bg-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Rooms;