import Image from 'next/image';
import React from 'react';

export default function PartnerComponent() {
  return (
    <section className='grid max-w-screen-xl mt-5 grid-cols-2 h-10  gap-3  sm:grid-cols-3 sm:gap-3 md:grid-cols-5 md:gap-3 mx-auto xl:grid-cols-5  xl:h-12 items-center  justify-evenly xl:gap-16'>
      <div className='h-full'>
        <Image width={200} height={200} src="/assets/nike.jpg" alt='nike logo'/>
      </div>
      <div className='h-full'>
        <Image width={100} height={100} src="/assets/ad.png" alt='adidas logo'/>
      </div>
      <div className='h-full'>
        <Image width={100} height={100} src="/assets/h&m.jpg" alt='h&m logo'/>
      </div>
      <div className='h-full'>
        <Image width={100} height={100} src="/assets/ad.png" alt='shopbop logo'/>
      </div>
      <div className='h-full'>
        <Image width={100} height={100} src="/assets/h&m.jpg" alt='h&m logo'/>
      </div>
    
    </section>
  );
}
