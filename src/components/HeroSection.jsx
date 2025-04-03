"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HomeBanner from "../assets/HomeBanner.jpg";
import HomeBanner1 from "../assets/HomeBanner1.jpg";
import { FaBookmark } from "react-icons/fa";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking data:', formData); 
  };

  return (
    <div className="flex flex-col w-full">

     
      <div className="relative w-full h-[350px] sm:h-[400px] md:h-[500px] bg-indigo-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={HomeBanner}
            alt="Historic building"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-4 sm:px-8 md:px-16 py-4 md:py-0">
          <div className="text-white max-w-md pt-4 sm:pt-6 md:pt-0 text-center md:text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 sm:mb-4 md:mb-6">
              Reliable Travel,<br />
              Anytime,<br />
              Anywhere
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              Safe, modern, and affordable bus services designed for rural
              and city commuters. Experience comfort and reliability with
              Vishwaraj Travels.
            </p>
            <Link href="/contact-us">
              <button className="bg-yellow-400 hover:bg-[#AC02FC] text-black hover:text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-md flex items-center mx-auto md:mx-0">
                Get Started
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </Link>
          </div>
          
          <div className="hidden md:block relative w-1/2 h-full">
            <Image
              src={HomeBanner1}
              alt="Vishwaraj Travels Bus"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

   
      <div className="w-full flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-8 gap-4 sm:gap-6 md:gap-8">
       
       
        <div className="bg-gradient-to-br from-purple-800 to-purple-600 text-white p-4 sm:p-6 md:p-8 w-full md:w-1/3 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold ">Ready to Travel?</h2>
          
          <div className="flex items-center mt-3 sm:mt-4 md:mt-3">
            <div className="bg-yellow-400 p-2 sm:p-3 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="ml-3 md:ml-4">
              <p className="text-xs sm:text-sm opacity-80">Call for detailed information</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold">+91 8459192776</p>
            </div>
          </div>
        </div>

 
        <div className="bg-white p-4 sm:p-6 shadow-md w-full md:w-2/3 rounded-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">Book Your Journey Now</h2>
          
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <label htmlFor="from" className="block text-gray-700 mb-1 sm:mb-2 text-sm">From</label>
                <input 
                  type="text" 
                  id="from" 
                  name="from" 
                  placeholder="Location" 
                  className="w-full p-2 sm:p-3 border border-gray-200 rounded-md bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.from}
                  onChange={handleChange}
                />
              </div>
              

              <div>
                <label htmlFor="to" className="block text-gray-700 mb-1 sm:mb-2 text-sm">To</label>
                <input 
                  type="text" 
                  id="to" 
                  name="to" 
                  placeholder="Location" 
                  className="w-full p-2 sm:p-3 border border-gray-200 rounded-md bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.to}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="date" className="block text-gray-700 mb-1 sm:mb-2 text-sm">When</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  placeholder="dd-mm-yyyy" 
                  className="w-full p-2 sm:p-3 border border-gray-200 rounded-md bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1 sm:mb-2 text-sm">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Email" 
                  className="w-full p-2 sm:p-3 border border-gray-200 rounded-md bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
          
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1 sm:mb-2 text-sm">Phone No</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="Phone No" 
                  className="w-full p-2 sm:p-3 border border-gray-200 rounded-md bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <button 
                type="submit" 
                className="bg-yellow-400 hover:bg-[#AE02FF] text-black hover:text-white font-bold py-4 sm:py-6 px-6 sm:px-8 md:px-10 rounded-md flex items-center text-lg transition duration-300"
              >
                <FaBookmark className="mr-2" />
                Book a Bus
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
