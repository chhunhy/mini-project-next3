"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { fetchUserProfile } from "@/redux/features/userProfile/userProfileSlice";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useGetProductsQuery } from "@/redux/service/product";
import CardContentComponent from "@/components/card/CardContentComponent";
import PartnerComponent from "@/components/partner/PartnerComponent";
import CardComponent from "@/components/card/CardComponent";
 import CardProductComponent from "@/components/card/CardProductComponent";
// import CardProduct from "@/components/card/CardProduct";

export default function Home() {
	return(
		<main>
		<section className="">
			<CardContentComponent/>
			<h1 className="text-3xl pl-32 text-pink-500 font-bold">Our Partner</h1>
    		<PartnerComponent/>
			<h1 className="mx-5 mb-5 max-w-screen-xl mt-24 md:mx-auto text-4xl font-bold">Popular Products</h1> 
			<CardProductComponent/>
		</section>	
	</main>
	)
}
