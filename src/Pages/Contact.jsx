import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Contact = () => {
  const notify = () => toast.success('Contact form submitted successfully.');

  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    EmailAddress: '',
    Message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { FirstName, LastName, EmailAddress, Message } = formData;

    if (!FirstName || !LastName || !EmailAddress || !Message) {
      toast.error('All fields are required');
      return;
    }

    try {
      const response = await axios.post(
        'https://manubackend.onrender.com/api/contact',
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      console.log(response.data);
      notify();
      setFormData({
        FirstName: '',
        LastName: '',
        EmailAddress: '',
        Message: '',
      });
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-white px-4 py-16">
        <div className="max-w-7xl mx-auto flex flex-row lg:flex-row gap-12 items-start justify-between">
          
          {/* Left: Beautiful Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-3xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8 text-base md:text-lg">
              We'd love to help you with booking, questions, or special requests!
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {[
                {
                  label: 'First Name',
                  name: 'FirstName',
                  type: 'text',
                  placeholder: 'Enter your first name',
                },
                {
                  label: 'Last Name',
                  name: 'LastName',
                  type: 'text',
                  placeholder: 'Enter your last name',
                },
                {
                  label: 'Email Address',
                  name: 'EmailAddress',
                  type: 'email',
                  placeholder: 'Enter your email address',
                },
              ].map((input) => (
                <div key={input.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    name={input.name}
                    value={formData[input.name]}
                    onChange={handleChange}
                    placeholder={input.placeholder}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition-all bg-white"
                    required
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full p-3 border border-gray-300 rounded-md resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white py-3 rounded-md hover:bg-white hover:text-black border-2 border-black font-medium text-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Address Details */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Reach Us At
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p><span className="font-semibold">📍 Address:</span><br />
                Thandi Rd, Tallital, Nainital, Uttarakhand 263002<br />
                </p>
              <p><span className="font-semibold">📞 Phone:</span> +91 7835834101</p>
                <p><span className="font-semibold">📞 Phone:</span> +91 9971855186</p>
                 <p><span className="font-semibold">📞 Phone:</span> +91 8743000197</p>
              <p><span className="font-semibold">📧 Email:</span> booking@rchronline.com</p>
              {/* <p><span className="font-semibold">🕒 Timings:</span> Mon - Sun | 9:00 AM - 9:00 PM</p> */}
            </div>

            {/* Optional Map */}
            {/* <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!..."
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl shadow-sm"
              ></iframe>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'green',
              secondary: 'white',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: 'red',
              secondary: 'white',
            },
          },
        }}
      />
    </>
  );
};

export default Contact;