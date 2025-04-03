"use client";
import React from 'react';
import Image from 'next/image';
import HelpingTime from "../assets/HelpingTime.jpg";

const Helping = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
    
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 mb-4 sm:mb-6 md:mb-8">
            Helping You Get There, Every Time
          </h1>
          
          <p className="text-gray-700 mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl">
            Safe, modern, and affordable bus services designed for rural and city commuters. Experience comfort and reliability with Vishwaraj Travels.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-indigo-900 mb-3">
                Reliable Bus Service, Always On Time
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Our buses run on time, are well-maintained, and driven by skilled drivers so you can ride worry-free. We take pride in providing timely services, ensuring you never have to worry about missing a bus.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-indigo-900 mb-3">
                Affordable & Modern Comfort
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Travel without spending too much! Our buses have AC, GPS, and comfy seats at prices you can afford. Enjoy a premium experience without the premium price tag.
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={HelpingTime}
              alt="Vishwaraj Travels modern bus"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Helping;
