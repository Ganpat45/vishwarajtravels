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
            <div className="flex items-center mb-4">
              <Image
                src={Logo}
                alt="Logo"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
              <h2 className="text-xl md:text-2xl font-bold tracking-wider">VISHWARAJ TRAVELS</h2>
            </div>
            <p className="mb-6 text-sm md:text-base">
              We started Vishwaraj Travels to give people in rural areas a better way to travel.
            </p>
            <a 
              href="tel:+918459192776" 
              className="bg-yellow-500 hover:bg-[#ffffff] text-black font-bold py-2 px-4 rounded inline-flex items-center text-sm md:text-base"
            >
              <FaPhoneAlt className="mr-2 flex-shrink-0" />+91 8459192776
            </a>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Useful Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-yellow-500 transition duration-300 text-sm md:text-base">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/components-us" className="hover:text-yellow-500 transition duration-300 text-sm md:text-base">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/components" className="hover:text-yellow-500 transition duration-300 text-sm md:text-base">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact-us" className="hover:text-yellow-500 transition duration-300 text-sm md:text-base">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0 flex flex-col">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 ">Get In Touch</h3>
            <div className="flex items-center mb-3 md:mb-4">
              <FaPhoneAlt className="mr-2 flex-shrink-0" />
              <a href="tel:+918459192776" className="text-[#ffffff] hover:text-[#D51E00] font-semibold transition-colors">
                +91 8459192776                 
              </a>
            </div>

            <div className="flex items-center mb-3 md:mb-4">
              <MdEmail className="mr-2 flex-shrink-0" />
              <a href="mailto:abhaydikshit@rediffmail.com" className="text-sm md:text-base text-[#ffffff] hover:text-yellow-500 font-semibold transition-colors break-all">
                abhaydikshit@rediffmail.com
              </a>
            </div>

            <div className="flex items-center mb-4 md:mb-6">
              <IoLocationSharp className="mr-2 flex-shrink-0" />
              <a 
                href="https://www.google.com/maps/place/Egniol+Group+of+Companies" 
                className="text-sm md:text-base text-[#ffffff] hover:text-yellow-500 font-semibold transition-colors break-all"
              >
                AT Post Mardi, Tal- Man, Satara, Maharashtra, India - 415508
              </a>
            </div>
          </div>

          <div className="mb-6 md:mb-0 flex flex-col">
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Social</h4>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/Egniol/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-white hover:text-[#D51E00] transition-colors" size={32} />
              </a>

              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-white hover:text-[#1DA1F2] transition-colors" size={32} />
              </a>

              <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="text-white hover:text-[#FF0000] transition-colors" size={32} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-6 md:mt-8 pt-4 md:pt-6 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-xs md:text-sm text-center w-full">
            © 2025, All Rights Reserved. - Designed & Developed with{' '}
            <span className="text-red-500">❤</span> by Egniol Services Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
