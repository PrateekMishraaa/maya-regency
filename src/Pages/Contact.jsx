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
        'http://localhost:4000/api/contact',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response);
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-center text-gray-600 mb-10 text-base md:text-lg px-2 md:px-12">
            Whether you have a question, need help planning your stay, or just want to say hello — our team is here and ready to assist you.
          </p>

          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-200">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-6"
            >
              {/* Input Fields */}
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
                <div
                  key={input.name}
                  className="w-full md:w-[80%] lg:w-[60%] transition-all"
                >
                  <label className="block text-base font-medium text-gray-700 mb-2">
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

              {/* Message */}
              <div className="w-full md:w-[80%] lg:w-[60%]">
                <label className="block text-base font-medium text-gray-700 mb-2">
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

              {/* Submit */}
              <button
                type="submit"
                className="w-full md:w-[80%] lg:w-[60%] bg-black text-white py-3 rounded-md hover:bg-white hover:text-black border-2 border-black font-medium text-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
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
