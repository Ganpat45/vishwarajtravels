"use client";
import React from 'react';
import Image from 'next/image';
import TravelBus from "../assets/TravelBus.svg";
import ChartelBus from "../assets/ChartelBus.svg";
import ContractBus from "../assets/ContractBus.svg";
import TouristBus from "../assets/TouristBus.svg";
import PublicBus from "../assets/PublicBus.svg";
import SchoolBus from "../assets/SchoolBus.svg";

const TravelsSection = () => {
  return (
    <div className=" w-full container px-4 py-8 items-start">
      <header className="mb-12">
        <h3 className="text-orange-500 font-semibold mb-2 ">Who We Are</h3>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-indigo-900 md:w-1/3">
            Making Travel Easy Since 2015
          </h1>
          <p className="text-gray-700 md:w-2/3 text-base sm:text-lg md:text-xl">
            We started Vishwaraj Travels to give people in rural areas a better way to travel. With safe, comfortable,<b/>
            and eco-friendly buses, we're here to serve you!  Our goal is to make transportation accessible and <b/>
            stress-free for everyone, ensuring that no destination is out of reach.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      
        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="mb-4">
            <Image 
              src={TravelBus}
              alt="Bus with clock icon" 
              width={100} 
              height={100} 
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-4">Travel Your Way, Anytime</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            We have different bus options for different needs. Choose what's best for you! Whether you need daily transport,
            a weekend getaway, or a private bus for a special event, we've got you covered.
          </p>
        </div>

        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="mb-4">
            <Image 
              src={ChartelBus} 
              alt="Charter bus icon" 
              width={100} 
              height={100} 
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-4">Charter Bus Service</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Need a private bus for a group trip? We've got you covered! Our charter buses are perfect for business outings,
            school excursions, and family vacations.
          </p>
        </div>

        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="mb-4">
            <Image 
              src={ContractBus}
              alt="Contract bus icon" 
              width={100} 
              height={100} 
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-4">Contract Bus Service</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Long-term bus services for businesses and daily commuters. Let us handle your transportation needs with
            consistency and efficiency.
          </p>
        </div>

        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="mb-4">
            <Image 
              src={TouristBus}
              alt="Tourist bus icon" 
              width={100} 
              height={100} 
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-4">Tourist Bus Service</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Explore new places with a comfortable, spacious bus ride. Sightseeing has never been easier with our well-planned routes and experienced drivers.
          </p>
        </div>

        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="mb-4">
            <Image 
              src={PublicBus}
              alt="Public bus icon" 
              width={100} 
              height={100} 
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-4">Public Bus Service</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Regular, reliable routes to get you where you need to go. No matter where you’re headed, we ensure you get there conveniently.
          </p>
        </div>

        <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="mb-4">
            <Image 
              src={SchoolBus}
              alt="SchoolBus icon" 
              width={100} 
              height={100} 
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-4">School Bus Service</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            Safe rides to and from school for students. We prioritize child safety with trained drivers and carefully maintained buses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelsSection;
