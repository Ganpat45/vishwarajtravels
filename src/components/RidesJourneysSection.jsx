"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import HappyRides from "../assets/HappyRides.jpg";
import T1 from "../assets/T1.jpg";

const RidesJourneysSection = () => {
  const [testimonials] = useState([
    {
      id: 1,
      text: "Nisi habitasse maximus vehicula consectetuer class fames pharetra phasellus curabitur nulla. Integer ad orci tempor magna vestibulum malesuada lorem.",
      name: "Susan Hollis",
      designation: "Designation",
      avatar: T1,
    },
  ]);

  return (
    <div className="w-full mt-[50px] bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          
         
          <div className="w-full md:w-1/2 relative">
            <div className="bg-indigo-900 rounded-lg p-2 shadow-xl relative">
              <div className="w-full h-64 sm:h-80 md:h-96 relative rounded overflow-hidden">
                <Image 
                  src={HappyRides}
                  alt="Person waiting for bus"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

        
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-500">
              Happy Riders, Satisfied Journeys
            </h1>

            <div className="mt-6 sm:mt-8">
              <h2 className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6 lg:mb-8">
                What People Say About Us
              </h2>

              
              <div className="overflow-hidden max-h-[400px]">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md mb-6 sm:mb-8">
                    <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          layout="responsive"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-indigo-900 text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.designation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RidesJourneysSection;
