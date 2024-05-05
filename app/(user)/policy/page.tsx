import { Metadata } from 'next';
import React from 'react';
import { MdPolicy } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";
import { MdMedicalInformation } from "react-icons/md";
export const metadata: Metadata = {
    title: "Policy Page",
    description: "This is policy page",
    keywords: ['shop' ,'ecommerce', 'sell']
  };
export default function page() {
  return (
    <main>
       <section className='bg-pink-50 h-[1120px] py-16  max-w-screen-xl mx-auto rounded-xl'>
         <section className='bg-purple-100 h-[1000px] rounded-2xl  mx-auto max-w-6xl'>
         <section>
<h1 className='pt-6 pb-4 text-3xl text-pink-700 font-medium flex'><span className='text-pink-500 px-5'><MdPolicy /></span>Privacy Policy</h1> 
<p className='px-5 text-gray-600 text-lg'>At Love Shop we recognize the importance of your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect use and safeguard your information when you visit our website.</p>
</section>
<section>
<h2 className='text-pink-500 text-2xl font-medium flex item-center px-12 mt-3'><span className='px-5'><BsPersonCheck /></span>Information We Collect</h2>  
<h3 className='text-pink-500 text-xl pl-24 mt-3 font-medium flex items-center '><span className='px-4'><IoPersonCircle /></span>Personal Information</h3>
<p className='text-gray-500 pl-36 text-md'>When you visit our website we may collect certain personal information from you such as your name email address mailing address phone number and payment information. We collect this information when you voluntarily submit it to us through various forms on our website.</p>
</section>
<section>
<h3 className='text-pink-500 text-xl pl-24 mt-3 font-medium flex items-center '><span className='px-4'><MdMedicalInformation /></span>Usage Data</h3>
<p className='text-gray-500 pl-36 text-md'>We may also collect information about how you access and use our website. This may include information such as your computers Internet Protocol address browser type browser version the pages of our website that you visit the time and date of your visit the time spent on those pages and other diagnostic data.</p>
</section>
<section>
<h2 className='text-pink-500 text-2xl font-medium flex item-center px-12 mt-3'><span className='px-5'><BsPersonCheck /></span>How We Use Your Information</h2>  
<h3 className='text-pink-500 text-xl pl-24 mt-3 font-medium flex items-center '><span className='px-4'><IoPersonCircle /></span>To Provide and Maintain Our Service</h3>
<p className='text-gray-500 pl-36 text-md'>We use the personal information we collect to provide you with access to our website and to maintain and improve our services.</p>
</section>
<section>
<h3 className='text-pink-500 text-xl pl-24 mt-3 font-medium flex items-center '><span className='px-4'><MdMedicalInformation /></span>To Personalize Your Experience</h3>
<p className='text-gray-500 pl-36 text-md'>We may use your information to personalize your experience on our website and to provide you with targeted advertisements and marketing communications.We may use your personal information to process transactions send you invoices and to provide you with customer support.</p>
</section>
<section>
<h2 className='text-pink-500 text-2xl font-medium flex item-center px-12 mt-3'><span className='px-5'><BsPersonCheck /></span>Data Security</h2>  
{/* <h3 className='text-pink-500 text-xl pl-24 mt-3 font-medium flex items-center '><span className='px-4'><IoPersonCircle /></span>To Provide and Maintain Our Service</h3> */}
<p className='text-gray-500 pl-36 text-md'>We are committed to ensuring that your information is secure. We have implemented appropriate technical and organizational measures to safeguard and secure the information we collect online.</p>
</section>
<section>
<h2 className='text-pink-500 text-2xl font-medium flex item-center px-12 mt-3'><span className='px-5'><BsPersonCheck /></span>Third-Party Services</h2>  
{/* <h3 className='text-pink-500 text-xl pl-24 mt-3 font-medium flex items-center '><span className='px-4'><IoPersonCircle /></span>To Provide and Maintain Our Service</h3> */}
<p className='text-gray-500 pl-36 text-md'>We may use third-party services such as Google Analytics to help us analyze how visitors use our website. These third-party service providers have their own privacy policies addressing how they use such information.</p>
</section>

<section>
<h2 className='text-pink-500 text-2xl font-medium flex item-center px-12 mt-3'><span className='px-5'><BsPersonCheck /></span>Changes to This Privacy Policy</h2>  
{/* <h3 className='text-pink-500 text-xl pl-24 mt-3 font-medium flex items-center '><span className='px-4'><IoPersonCircle /></span>To Provide and Maintain Our Service</h3> */}
<p className='text-gray-500 pl-36 text-md'>We may update our Privacy Policy from time to time. Any changes we make to our Privacy Policy will be posted on this page. We encourage you to review this Privacy Policy periodically for any changes.</p>
</section>
         </section>  
       </section>
    </main>
  );
}

