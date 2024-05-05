'use client'
import { ProductDetailType, ProductRespone, ProductType, placeHolderImage } from "@/lib/definitions";
import { Card } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { increment,decrement,incrementByAmount } from "@/redux/features/counter/counterSlice";
import { addToCart } from "@/redux/features/cart/cartSlice";
const getData=async()=>{	
  const data=await fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/products/?page=1&page_size=4`)
  const respone=await data.json();
  return respone.results;
}
export default async function CardDetail(props:ProductRespone) {
    const disPatch = useAppDispatch();
  const router=useRouter();
  const items=await getData();
  return (
    <main className="container mx-auto mt-3 ">
      <div className="grid lg:grid-cols-2">
        <div className="max-w-[500px] mx-auto">
          <img src={props?.image||placeHolderImage} alt="" className="max-w-[500px] "/>
        </div>
        <div className="leading-[40px]">
          <p className="text-[30px]">{props.name}</p>
          <div className="mb-5 mt-2.5 flex items-center">
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          5.0
        </span>
      </div>
          <p className="text-3xl font-semibold">${props.price} </p>	
          <p className="pr-12">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
          <div>
            
<form>
    <label className="font-semibold">Choose quantity:</label>
    <div className="relative flex items-center max-w-[8rem]">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value="0" required />
        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select number from 1 to 9</p>
        </form>
          </div>
          <button
        
        className="rounded-lg bg-pink-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        onClick={()=>{
        disPatch(addToCart(props as ProductType));
        disPatch(increment())}}
      >
        Add to cart 
      </button>
          <div className="mt-[35px] leading-4">
     
      <p className="text-black font-semibold">Descriptions</p>
      <hr className="bg-green-500 border-none h-[1px] w-[90px]" />
        <p className="text-gray-500 font-semibold text-base mt-4">${props.desc}</p>
      </div>
        </div>
      </div>
      
      <p className="mt-4 max-w-screen-xl mx-auto text-[24px] text-black font-semibold ">More Products</p>
      <div className="mt-[30px] grid sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 max-w-screen-xl mx-auto">
        {items.map((item:ProductType)=>(
           <Card
           className="container mx-auto h-[400px] w-[300px] cursor-pointer"
           renderImage={()=>(<img className='w-[310px] h-[400px] overflow-hidden object-fit' src={item?.image||placeHolderImage} alt={item.name} onClick={()=>router.push(`/service/${item.id}`)} />
           )}  
         >
           <h5 className="mt-[-40px] text-xl font-bold tracking-tight text-gray-900 dark:text-white">
             {item?.name||"Product Name"}
           </h5>
           <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
             {item?.desc||"Product Description"}
           </p>
         
           <div className="flex items-center justify-between">
             <span className="text-xl font-bold text-gray-900 dark:text-white">${item.price}</span>
             <a
               href="#"
               className="rounded-lg bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
             >
               Add to cart
             </a>
           </div>
         </Card>
        ))}
      </div>
    </main>
  );
}
