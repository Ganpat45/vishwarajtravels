import React from 'react';
import Image from 'next/image';
import Logo from "../assets/Logo.jpg";
import { FaPhoneAlt, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#242753] text-white py-6 md:py-10">
      <div className="container mx-auto px-4">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
     
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-4">
              <Image
                src={Logo}
                alt="Logo"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
              <h2 className="text-3xl font-bold tracking-wider">VISHWARAJ TRAVELS</h2>
            </div>
            <p className="mb-6 text-xl">
              We started Vishwaraj Travels to give people in rural areas a better way to travel.
            </p>
            <a 
              href="tel:+918459192776" 
              className="bg-yellow-500 hover:bg[#AE02FF] text-black font-bold py-2 px-4 rounded inline-flex items-center text-sm md:text-base"
            >
              <FaPhoneAlt className="mr-2 flex-shrink-0" size={30} /> 
              +91 8459192776
            </a>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl  font-bold mb-4 md:mb-6">Useful Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-yellow-500 transition duration-300 text-xl">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about-us" className="hover:text-yellow-500 transition duration-300 text-xl">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:text-yellow-500 transition duration-300 text-xl">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact-us" className="hover:text-yellow-500 transition duration-300 text-xl">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0 flex flex-col">
            <h3 className="text-2xl font-bold mb-4 md:mb-6 ">Get In Touch</h3>
            <div className="flex items-center mb-3 md:mb-4">
              <FaPhoneAlt className=" text-yellow-500 mr-2 flex-shrink-0" size={24} /> 
              <a href="tel:+918459192776" className="text-[#ffffff] hover:text-yellow-500  text-xl font-bold transition-colors">
                +91 8459192776                 
              </a>
            </div>

            <div className="flex items-center mb-3 md:mb-4">
              <MdEmail className="text-yellow-500 mr-2 flex-shrink-0" size={24} /> 
              <a href="mailto:abhaydikshit@rediffmail.com" className="text-xl text-[#ffffff] hover:text-yellow-500 font-bold transition-colors break-all">
                abhaydikshit@rediffmail.com
              </a>
            </div>

            <div className="flex items-center mb-4 md:mb-6">
              <IoLocationSharp className=" text-yellow-500 mr-2 flex-shrink-0" size={24} /> 
              <a 
                href="https://www.google.com/maps/place/Egniol+Group+of+Companies" 
                className="text-xl text-[#ffffff] hover:text-yellow-500 font-bold transition-colors break-all"
              >
                AT Post Mardi, Tal- Man, Satara, Maharashtra, India - 415508
              </a>
            </div>
          </div>

          <div className="mb-6 md:mb-0 flex flex-col">
            <h4 className="text-2xl font-bold mb-4 md:mb-6">Social</h4>
            <div className="flex items-center space-x-4 ">
              <a href="https://www.facebook.com/Egniol/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className=" hover:bg-[#EAA10B] " size={40} /> 
              </a>

              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className=" hover:bg-[#EAA10B]" size={40} /> 
              </a>

              <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="hover:bg-[#EAA10B]" size={40} /> 
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-6 md:mt-8 pt-4 md:pt-6 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-xl text-center w-full">
            © 2025, All Rights Reserved. - Designed & Developed with{' '}
            <span className="text-red-500">❤</span> by Egniol Services Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
