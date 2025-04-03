"use client";
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="flex items-start mb-6 md:mb-0">
          <div className="bg-yellow-400 p-4 mr-4">
            <FaMapMarkerAlt className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-900">Office Location</h3>
            <p className="text-gray-700 text-sm md:text-base">
              AT Post Mardi, Tal- Man, Satara, Maharashtra, India - 415508
            </p>
          </div>
        </div>

        <div className="flex items-start mb-6 md:mb-0">
          <div className="bg-yellow-400 p-4 mr-4">
            <FaPhoneAlt className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-900">Phone Number</h3>
            <p className="text-gray-700 text-sm md:text-base">+91 8459192776</p>
          </div>
        </div>

        <div className="flex items-start mb-6 md:mb-0">
          <div className="bg-yellow-400 p-4 mr-4">
            <FaEnvelope className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-900">Email Address</h3>
            <p className="text-gray-700 text-sm md:text-base">abhaydikshit@rediffmail.com</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                  placeholder="Subject"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded bg-gray-100"
                placeholder="Message"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#FFAE02] text-black py-2 px-6 rounded hover:bg-[#181E76] hover:text-white transition flex items-center justify-center gap-2"
            >
              <IoIosSend className="text-2xl" /> Send Message
            </button>
          </form>
        </div>

        <div className="h-96 relative border border-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15157.457930927053!2d74.10861566977541!3d17.67753400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc26ae32a0bb00b%3A0x9bd9b1b87cae11cb!2sMardi%2C%20Maharashtra%20415509!5e0!3m2!1sen!2sin!4v1712064543764!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute top-2 right-2 bg-white p-3 rounded shadow">
            <h3 className="text-lg font-medium mb-1">Mardi</h3>
            <p className="text-sm text-gray-600 mb-2">Maharashtra 415509</p>
            <a 
              href="https://maps.google.com/maps?ll=17.677534,74.108616&z=14&t=m&hl=en&gl=IN&mapclient=embed&q=Mardi%2C%20Maharashtra%20415509" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 text-sm hover:underline"
            >
              Directions
            </a>
            <div className="mt-2">
              <a 
                href="https://maps.google.com/maps?ll=17.677534,74.108616&z=14&t=m&hl=en&gl=IN&mapclient=embed&q=Mardi%2C%20Maharashtra%20415509" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 text-sm hover:underline"
              >
                View larger map
              </a>
            </div>
          </div>

          <button 
            className="absolute top-4 right-14 bg-white p-2 rounded-sm shadow-md"
            aria-label="Zoom in"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
