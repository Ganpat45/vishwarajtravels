'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from "../assets/Logo.jpg";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesNav, setServicesNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleServicesMouseEnter = () => {
    setServicesNav(true)
  }

  const handleServicesMouseLeave = () => {
    setServicesNav(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={`bg-purple-700 text-white py-4 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between space-x-4">
      
      
        <div className="flex items-center space-x-4">
          <div>
            <Image
              src={Logo}
              alt="Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wider">VISHWARAJ</h1>
            <h2 className="text-xl md:text-2xl font-bold tracking-wider">TRAVELS</h2>
          </div>
        </div>

        
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="h-6 w-6 text-white" />
            ) : (
              <FiMenu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        
        <nav className={`lg:flex items-center space-x-8 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/components-us" className="hover:text-yellow-300 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/components" className="hover:text-yellow-300 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-yellow-300 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      
        <div className="hidden lg:flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="mr-2 text-yellow-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <div className="text-lg">Email</div>
              <a href="mailto:abhaydikshit@rediffmail.com" className="text-sm hover:text-yellow-300 transition-colors">abhaydikshit@rediffmail.com</a>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="mr-2 text-yellow-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="text-lg">Call Now</div>
              <a href="tel:+918459192776" className="text-sm hover:text-yellow-300 transition-colors">+91 8459192776</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
