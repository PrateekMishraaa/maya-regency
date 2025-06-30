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
      title: "Premimum Lake View Room",
      price: "₹8,599",
      details: "Permium Lake Facing Room is Well appointed rooms and balcony available and this is lake facing room...",
      facilities: "195 sq.ft. King Sized Bed Max. 3 Adults Lake view",
      description: "Indulge in the perfect blend of comfort and natural beauty with our Premium Lake View Room. Thoughtfully designed for a luxurious stay, this room offers stunning views of the tranquil lake right from your window or private balcony. Enjoy stylish interiors, a plush king-sized bed, modern amenities, and a calming ambiance that enhances your stay. Whether you're relaxing with a book or watching the sunset over the water, every moment in this room is designed to be serene and unforgettable."

    },
    {
      img: RoomThree,
      title: "Elegant Room",
      price: "₹6,499",
      details: "Elegant Lake Facing is well appointed rooms with all amenities on high floor with window lake view.",
      facilities: "324 sq.ft. Double Sized Bed. Max. 3 Adults. Lake View",
      description: "Step into timeless charm and refined comfort in our Elegant Room. Designed with tasteful décor and soothing tones, this room offers a warm and welcoming ambiance ideal for both leisure and business travelers. Featuring a cozy queen or king-sized bed, modern furnishings, soft lighting, and all essential amenities, it’s the perfect space to unwind and recharge. Whether you're staying for a short escape or a longer retreat, the Elegant Room promises a relaxing and stylish experience."

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
      <section className="min-h-screen w-full p-6 md:p-10 bg-gray-50">
        <h2 className="text-5xl font-bold font-serif text-center mb-12">Our Rooms</h2>

        {rooms.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row mb-10 max-w-5xl mx-auto"
          >
            {/* Room Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:w-1/2 h-68 object-cover rounded-3xl"
            />

            {/* Room Content */}
            <div className="p-6 md:w-1/2 flex flex-col justify-between ">
              <div className=''>
                <h3 className="text-5xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-4">{item.details}</p>
                <p className="text-sm text-gray-500 italic py-4">{item.facilities}</p>
                <p className='text-gray-600  italic py-4'>{item.description}</p>
              </div>

              <div className=" flex justify-between items-center">
                <p className="text-xl font-bold text-green-700">Starts From {item.price} per/ night</p>
                <button className="px-6 py-2 cursor-pointer hover:bg-black transition hover:text-white transition bg-black text-white rounded-full hover:bg-gray-800 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Rooms;
