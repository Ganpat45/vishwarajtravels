"use client";
import React, { useState, useEffect } from 'react';
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
    {
      id: 2,
      text: "Nisi habitasse maximus vehicula consectetuer class fames pharetra phasellus curabitur nulla. Integer ad orci tempor magna vestibulum malesuada lorem.",
      name: "John Doe",
      designation: "Designation",
      avatar: T1,
    },
    {
      id: 3,
      text: "Nisi habitasse maximus vehicula consectetuer class fames pharetra phasellus curabitur nulla. Integer ad orci tempor magna vestibulum malesuada lorem.",
      name: "Jane Smith",
      designation: "Designation",
      avatar: T1,
    },
    {
      id: 4,
      text: "Nisi habitasse maximus vehicula consectetuer class fames pharetra phasellus curabitur nulla. Integer ad orci tempor magna vestibulum malesuada lorem.",
      name: "Jane Smith",
      designation: "Designation",
      avatar: T1,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [testimonials.length]);

  return (
    <div className="w-full mt-[50px] bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          
          <div className="w-full md:w-1/2 relative">
            <div className="bg-indigo-900 rounded-lg p-2 shadow-xl relative">
              <div className="w-full h-64 sm:h-80 md:h-120 relative rounded overflow-hidden">
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
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-500">
              Happy Riders, Satisfied Journeys
            </h1>

            <div className="mt-6 sm:mt-8">
              <h2 className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6 lg:mb-8">
                What People Say About Us
              </h2>

              <div className="relative overflow-hidden max-w-full">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`, 
                  }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="flex-shrink-0 w-full bg-white p-6 rounded-lg shadow-md mb-6 sm:mb-8"
                    >
                      <p className="text-gray-700 italic text-xl mb-4">{testimonial.text}</p>
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            layout="responsive"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-indigo-900 text-lg">{testimonial.name}</h3>
                          <p className="text-base text-gray-600">{testimonial.designation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

          
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                  <button
                    onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="bg-gray-700 text-white p-2 rounded-full"
                  >
                    &#8249;
                  </button>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                  <button
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                    className="bg-gray-700 text-white p-2 rounded-full"
                  >
                    &#8250;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RidesJourneysSection;