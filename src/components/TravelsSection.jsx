"use client";
import React from 'react'
import Image from 'next/image';
import TravelBus from "../assets/TravelBus.svg";
import ChartelBus from "../assets/ChartelBus.svg";
import ContractBus from "../assets/ContractBus.svg";
import TouristBus from "../assets/TouristBus.svg";
import PublicBus from "../assets/PublicBus.svg";
import SchoolBus from "../assets/SchoolBus.svg";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Travel Your Way, Anytime",
      icon: TravelBus, 
      description: "We have different bus options for different needs. Choose what's best for you! Whether you need daily transport, a weekend getaway, or a private bus for a special event, we've got you covered."
    },
    {
      id: 2,
      title: "Charter Bus Service",
      icon: ChartelBus, 
      description: "Need a private bus for a group trip? We've got you covered! Our charter buses are perfect for business outings, school excursions, and family vacations."
    },
    {
      id: 3,
      title: "Contract Bus Service",
      icon: ContractBus,  
      description: "Long-term bus services for businesses and daily commuters. Let us handle your transportation needs with consistency and efficiency."
    },
    {
      id: 4,
      title: "Tourist Bus Service",
      icon: TouristBus, 
      description: "Explore new places with a comfortable, safe, and enjoyable journey. Our tourist buses come with all the amenities you need."
    },
    {
      id: 5,
      title: "Public Bus Service",
      icon: PublicBus, 
      description: "Regular, reliable routes to get you where you need to go. Affordable and convenient transportation for everyone."
    },
    {
      id: 6,
      title: "School Bus Service",
      icon: SchoolBus,  
      description: "Safe rides to and from school for your children. Our trained drivers and well-maintained buses ensure peace of mind."
    }
  ];

  return (
    <div className="w-full mt-[50px] bg-white">
      <main className="w-full  px-4 sm:px-6 lg:px-8 py-12">
    
        <div className="flex flex-col md:flex-row items-start  mb-8">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-yellow-500 font-bold text-xl mb-2">Who We Are</h2>
            <h1 className="text-4xl font-bold text-indigo-900 leading-tight">
              Making Travel<br />Easy Since 2015
            </h1>
          </div>
          <div className="md:w-3/4">
            <p className="text-gray-700 text-xl font-bold">
              We started Vishwaraj Travels to give people in rural areas a better way to travel. 
              With safe, comfortable, and eco-friendly buses, we're here to serve you! 
              Our goal is to make transportation accessible and stress-free for everyone, 
              ensuring that no destination is out of reach.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-50 rounded-lg shadow-sm p-8 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 mb-6">
                <Image 
                  src={service.icon}  
                  alt={service.title} 
                  width={96} 
                  height={96} 
                  layout="responsive"
                />
              </div>
              <h3 className="text-2xl font-bold text-indigo-900  hover:text-[#000000] mb-4">{service.title}</h3>
              <p className="text-gray-600 text-xl font-bold">{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
