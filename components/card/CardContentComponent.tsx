import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function CardContentComponent() {
  return (
    <>
      <section className=" dark:bg-gray-900"> 
            <div className="grid max-w-screen-xl  px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-3xl mb-4 text-3xl  text-purple-600 md:text-4xl roboto-black xl:text-5xl dark:text-white">Become the Software <span className="text-[#F926AE] roboto-black">engineer</span>  that company to <span className="text-[#F926AE] roboto-black">love hire</span> </h1>
                    <p className="max-w-2xl mb-6 pt-5 font-light text-[#697089] roboto-light lg:mb-8 md:text-lg  dark:text-gray-400">Learn how to develop and design digital platforms from industry experts through videos, text materials and individual mentoring approaches. All the coding courses you need to excel in one place.</p>
                    <a href="./html/course.html" className="inline-flex items-center justify-center roboto-regular px-5 py-3 mr-3 bg-gradient-to-r from-[#655EFF] to-[#A562F6] text-lg font-medium text-center text-white rounded-lg 
                    hover:bg-primary-800 focus:ring-4 focus:ring-purple-300 dark:focus:ring-primary-900">
                        Start Learning
                        
                          <span className="h-7 w-7 ml-2"><i className="fa-solid fa-circle-chevron-right"></i></span>
                          
                       
                    </a>
                    <a href="./html/course.html" className="inline-flex roboto-regular bg-gradient-to-r from-[#655EFF] to-[#A562F6] items-center justify-center px-5 py-3 text-lg font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-purple-300 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        View Courses
                        <svg className="w-7 h-7 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
                          </svg>
                    </a> 
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image src="/assets/e-commerce business.jpg" alt="mockup"/>
                </div>                
            </div>
        </section>
    </>
  );
}
