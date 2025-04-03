"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    if (openQuestion === id) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(id);
    }
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
      answer: 'Yes, all our buses are equipped with GPS tracking systems for better route management and safety.'
    },
    {
      id: 'ac',
      question: 'Are AC buses available?',
      answer: 'Yes, we offer both AC and non-AC buses for your comfort depending on the route and your preferences.'
    },
    {
      id: 'group',
      question: 'Can I book a bus for a group trip?',
      answer: 'Yes, we offer group bookings. Please contact our customer service for special rates and arrangements.'
    },
    {
      id: 'safety',
      question: 'How do you keep passengers safe?',
      answer: 'We ensure passenger safety through regular vehicle maintenance, trained drivers, GPS tracking, and strict adherence to safety protocols.'
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto px-4 py-6">
  
      <div className="md:w-1/3 flex flex-col items-start mb-6 md:mb-0">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-4">Got Questions? We've Got Answers!</h1>
        <p className="text-gray-700 text-base sm:text-lg mb-6">
          Here are some common questions about our services. We believe in transparency and making travel easy for everyone.
        </p>
        
        <div className="bg-[#FFFFFF] p-6 relative w-full rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-4">
            How do I book a ride with Vishwaraj Travels?
          </h2>
          <button className="bg-yellow-400 hover:bg-[#AE02FF] text-black hover:text-white py-2 px-4 mt-4 inline-flex items-center rounded-full">
            Discover More
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
          <div className="absolute inset-0 bg-stripes opacity-10 z-0"></div>
        </div>
      </div>
      
    
      <div className="space-y-6 w-full md:w-2/3">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-100 transition-all duration-300 hover:shadow-md rounded-lg"
          >
            <button
              onClick={() => toggleQuestion(faq.id)}
              className={`w-full shadow-lg bg-[#F7F9FB] rounded-2xl px-6 py-5 text-left flex justify-between items-center hover:bg-[#700EC6] transition-all duration-300`}
              aria-expanded={openQuestion === faq.id}
              aria-controls={`faq-content-${faq.id}`}
            >
              <h3 className="text-lg sm:text-xl font-bold text-black hover:text-white">
                {faq.question}
              </h3>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors text-purple-500`}
              >
                {openQuestion === faq.id ? (
                  <ChevronUp size={18} className="transition-transform duration-200" />
                ) : (
                  <ChevronDown size={18} className="transition-transform duration-200" />
                )}
              </div>
            </button>
            <div
              id={`faq-content-${faq.id}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openQuestion === faq.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              aria-hidden={openQuestion !== faq.id}
            >
              <div className="px-6 py-5 text-gray-700 border-t border-gray-100">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
