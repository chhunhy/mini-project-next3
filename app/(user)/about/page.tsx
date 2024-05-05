import React from "react";
import styles from "./AboutUs.module.css"
import { Metadata} from "next";
import Image from "next/image";
import PartnerComponent from "@/components/partner/PartnerComponent";
export const metadata: Metadata = {
  title: "About us",
  description: "This is about us shop",
  keywords: ['shop', 'ecommerce', 'sell']
};
const page = () => {
 
  return (
    <>
    {/* welcome */}
      <section className=" dark:bg-gray-900 ">
          <div className="gap-8 items-center  py-4 sm:px-12 px-4 mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 lg:px-6 xl:py-6 xl:px-0">
              <div className="mt-4 md:mt-0  ">
                  <h2 className="mb-4 text-4xl  font-bold roboto-regular  dark:text-white text-transparent bg-clip-text bg-gradient-to-r to-[#8244FF] from-[#F926AE] ">Welcome to Love Shop</h2>
                  <p className="mb-6 font-light roboto-light text-gray-400 md:text-lg dark:text-gray-400">Greeting for everyone Welcome from Love Shop. Love Shop is the website e-commerce that can help to find product that have qualitiy. You can find products that quality in Love Shop. we will provide you products more. You can buy products in Love Shop. It will help you a lot.</p>
                  
              </div>
            <Image className="xl:ml-44"  src={"/assets/welcome.jpg"} width={400} height={400} alt="welcome"/>    
          </div>
      </section>
      {/* visions */}
      <section className=" dark:bg-gray-900">
            <div className="gap-8 items-center py-4 sm:px-12 px-4 mx-auto max-w-screen-xl xl:gap-12 md:grid md:grid-cols-2 lg:px-6 xl:py-3 xl:px-0">
        
           
               <Image className=" hidden md:block" src={"/assets/vision.jpg"} width={400} height={400}  alt="vision image" />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl  font-bold roboto-regular  dark:text-white text-transparent bg-clip-text bg-gradient-to-r to-[#8244FF] from-[#F926AE] ">Our Vision</h2>
                     <p className="mb-6 font-light roboto-light text-gray-400 md:text-lg dark:text-gray-400">With Love Shop, you have an infinite canvas that transforms how you use the apps you love. Arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a reality — all while staying present in the world around you. Browse the web in Safari, create a to-do list in Notes, chat in Messages, and seamlessly move between them with a glance.</p>
                    
                 </div>
               
                 <Image className=" block md:hidden" src={"/assets/vision.jpg"} width={400}  height={400} alt="vision image" />
                 
            </div>
      </section>

    {/* missions */}
      <section className=" dark:bg-gray-900 ">
        <div className="gap-8 items-center  py-4 sm:px-12 px-4 mx-auto max-w-screen-xl xl:gap-32 md:grid md:grid-cols-2 lg:px-6 xl:py-6 xl:px-0">
            <div className="mt-4 md:mt-0  ">
                <h2 className="mb-4 text-4xl  font-bold roboto-regular  dark:text-white text-transparent bg-clip-text bg-gradient-to-r to-[#8244FF] from-[#F926AE] ">Our Mission</h2>
                <p className="mb-6 font-light roboto-light text-gray-400 md:text-lg dark:text-gray-400">Greeting for everyone Welcome from Love Shop. Love Shop is the website e-commerce that can help to find product that have qualitiy. You can find products that quality in Love Shop. we will provide you products more. You can buy products in Love Shop. It will help you a lot.</p>
                
            </div>
           <Image className="xl:ml-44"  src={"/assets/missions.jpg"} width={400} height={400} alt="welcome"/>    
        </div>
       </section>
       <PartnerComponent/>
 
    </>
  );
};

export default page;
