"use client";
import React from 'react';
import Image from 'next/image';
import RideTravelsBus from "../assets/RideTravelsBus.jpg";

const RideSection = () => {
  return (
    <div className="w-full bg-indigo-900 bg-opacity-50 bg-blend-multiply relative">
      <div className="absolute inset-0 z-0">
        <Image 
          src={RideTravelsBus} 
          alt="RideTravelsBus" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-70" 
        />
      </div>

      <div className="container  px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-[#E1F6FF] relative z-10">
        <div className="mb-6">
          <p className="text-amber-500 font-semibold mb-2">The Best Travel Choice</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Why Ride With Vishwaraj?</h1>
          <p className="text-xl sm:text-2xl max-w-3xl">
            Our buses are affordable, comfortable, and always on time. Here's what makes us special: great service, excellent safety measures, and convenient travel options that fit your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mt-10">
        
          <div className="flex items-start">
            <div className="bg-amber-500 p-3 rounded mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Low Fares, Big Savings</h3>
              <p className="text-sm sm:text-base">
                Travel without breaking the bank! We keep our prices budget-friendly while ensuring excellent service and convenience.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-500 p-3 rounded mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Travel in Comfort, Arrive Relaxed</h3>
              <p className="text-sm sm:text-base">
                AC buses, comfy seats, and GPS tracking for a smooth journey. Enjoy a relaxed and pleasant travel experience every time you ride with us.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-500 p-3 rounded mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Your Safety First, Always</h3>
              <p className="text-sm sm:text-base">
                Our trained drivers and well-maintained buses ensure a safe trip every time. We follow strict safety standards to give you peace of mind.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-500 p-3 rounded mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Local and Reliable, Made for You</h3>
              <p className="text-sm sm:text-base">
                We serve rural areas and small towns, making sure everyone has a good travel option. Our services are built with your needs in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideSection;
