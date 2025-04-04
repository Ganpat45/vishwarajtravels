"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We take online payments, cash, and corporate billing, making it easy for you to pay your way.'
    },
    {
      id: 'gps',
      question: 'Do your buses have GPS?',
      answer: 'Yes! Our buses come with real-time GPS tracking for safety and to keep you updated on your route.'
    },
    {
      id: 'ac',
      question: 'Are AC buses available?',
      answer: 'Yes, we have AC buses to provide a cool and comfy ride, no matter the season.'
    },
    {
      id: 'group',
      question: 'Can I book a bus for a group trip?',
      answer: 'Of course! Our charter buses are perfect for group travel, making your trips fun and hassle-free.'
    },
    {
      id: 'safety',
      question: 'How do you keep passengers safe?',
      answer: 'We do regular bus checks, follow hygiene standards, and hire professional drivers. Your safety is our top priority.'
    }
  ];

  return (
    <div className="bg-[#FFFFFF] w-full mt-[50px] mx-auto py-16 px-4 rounded-xl">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        
     
        <div className="space-y-8 w-full text-space-start p-6 mb-4">
          <h2 className="text-4xl font-bold text-[#0E264E] mb-6">
            Got Questions? We’ve 

            <p>Got Answers!</p>
          </h2>
          <p className="text-xl text-[#696969] leading-relaxed mb-6">
            Here are some common questions about our services. 
            We believe in transparency and making travel easy for everyone.
          </p>
          
        
          <div className="relative bg-gray-100 p-8 mb-6 hover:bg-indigo-50 hover:shadow-md transition-all rounded-lg">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">
             <p> How do I book a ride </p>
             <p>with Vishwaraj</p>
               Travels?
            </h2>
            <a 
              href="/contact-us" 
              className="inline-flex justify-center bg-yellow-400 text-black font-medium px-6 py-3 mt-6 hover:bg-[#AE02FF] hover:shadow transition-all rounded-md"
            >
              Discover More 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      
       
        <div className="space-y-6 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-100 transition-all duration-300 hover:shadow-md rounded-lg mb-6"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full shadow-lg bg-[#F7F9FB]  hover:bg-[#640FBC]  rounded-2xl px-6 py-5 text-left flex justify-between items-center`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-xl font-bold text-[#000000] hover:text-white">
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors text-purple-500`}>
                  {openIndex === index ? (
                    <ChevronUp size={18} className="transition-transform duration-200" />
                  ) : (
                    <ChevronDown size={18} className="transition-transform duration-200" />
                  )}
                </div>
              </button>

              <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-6 py-5 text-gray-700 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
