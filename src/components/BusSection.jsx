"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BusModal from "../assets/BusModal.jpg"; 

const BuseSection = () => {
  return (
    <div className="relative w-full h-[350px] sm:h-[400px] md:h-96 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={BusModal} 
          alt="Vishwaraj Buses" 
          fill 
          style={{ objectFit: 'cover' }} 
          className="opacity-70" 
        />
        <div className="absolute inset-0 bg-blue-900/60" /> 
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-8 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
          Affordable & Modern Comfort
        </h2>
        
        <p className="text-white text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-3xl">
          Travel without spending too much! Our buses have AC, GPS, and comfy seats at prices you can afford. 
          Enjoy a premium experience without the premium price tag.
        </p>
        
        <Link href="/contact-us">
          <span className="bg-yellow-500 hover:bg-[#AE02FF] text-black  hover:text-white px-8 py-3 rounded-full flex items-center transition-colors duration-300">
            Discover More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BuseSection;
