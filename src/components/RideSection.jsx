"use client";
import React from 'react';
import Image from 'next/image';
import RideTravelsBus from "../assets/RideTravelsBus.jpg";
import { FaCheck } from 'react-icons/fa';

const RideSection = () => {
  return (
    <div className="w-full mt-[50px] bg-indigo-900 bg-opacity-50 bg-blend-multiply relative">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image 
            src={RideTravelsBus} 
            alt=" " 
            layout="fill" 
            objectFit="cover" 
            className="opacity-70" 
            priority
          />
        </div>
      </div>

      <main className="relative z-20 container mx-auto px-4 py-8 text-white">
        <section className="mt-8 md:mt-16 max-w-4xl">
          <h3 className="text-yellow-400 font-bold mb-6">The Best Travel Choice</h3>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Why Ride With Vishwaraj?
          </h1>
          
          <p className="text-xl mb-12">
            Our buses are affordable, comfortable, and always on time. Here's what makes us special:
            great service, excellent safety measures, and convenient travel options that fit your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-yellow-500 p-2 rounded-md">
                  <FaCheck className="text-black" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Low Fares, Big Savings</h2>
                <p className="text-xl font-semibold">
                  Travel without breaking the bank! We keep our prices budget-friendly while
                  ensuring excellent service and convenience.
                </p>
              </div>
            </div>

          
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-yellow-500 p-2 rounded-md">
                  <FaCheck className="text-black" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Travel in Comfort, Arrive Relaxed</h2>
                <p className="text-xl font-semibold">
                  AC buses, comfy seats, and GPS tracking for a smooth journey. Enjoy a relaxed
                  and pleasant travel experience every time you ride with us.
                </p>
              </div>
            </div>

       
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-yellow-500 p-2 rounded-md">
                  <FaCheck className="text-black" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Your Safety First, Always</h2>
                <p className="text-xl font-semibold">
                  Our trained drivers and well-maintained buses ensure a safe trip every time. We
                  follow strict safety standards to give you peace of mind.
                </p>
              </div>
            </div>

            
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-yellow-500 p-2 rounded-md">
                  <FaCheck className="text-black" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Local and Reliable, Made for You</h2>
                <p className="text-xl font-semibold">
                  We serve rural areas and small towns, making sure everyone has a good travel
                  option. Our services are built with your needs in mind.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RideSection;
