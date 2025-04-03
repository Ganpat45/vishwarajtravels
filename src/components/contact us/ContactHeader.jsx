"use client";
import Image from "next/image";
import ContactHeader from "../../assets/ContactHeader.jpg";

const ContactUsHeader = () => {
  return (
    <section className="relative w-full h-80 bg-indigo-900 flex items-center justify-center overflow-hidden">
 
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 opacity-90"></div>
      
      <div  className="absolute inset-0 bg-cover bg-center opacity-20" >
       <Image 
                 src={ContactHeader} 
                 alt="ContactHeader" 
                 layout="fill" 
                 objectFit="cover" 
                 className="opacity-70" 
               />
      </div>
      
      
      <div className="relative z-10 text-center max-w-4xl px-4 md:px-8">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Get in Touch Anytime</h2>
        <p className="text-white text-lg md:text-xl">
          Have questions or need to book a ride? We're here to help! Reach out to us for quick assistance and bookings.
        </p>
      </div>
    </section>
  );
};



export default ContactUsHeader;