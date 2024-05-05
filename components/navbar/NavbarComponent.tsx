"use client";
import Link from "next/link";
import {
	NavbarBrand,
	NavbarCollapse,
	NavbarToggle,
} from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { MenuList } from "./menu";
import { useAppSelector } from "@/redux/hooks";
import { selectAvatar, selectBio } from "@/redux/features/userProfile/userProfileSlice";
import { IoMdCart } from "react-icons/io";
import { Button, Navbar, NavbarLink } from "flowbite-react";
type MenuItem = {
	name: string;
	path: string;
	active: boolean;
};

export default function NavbarComponent() {
	const count = useAppSelector((state) => state.counter.value);
	const avatar = useAppSelector(selectAvatar);
	const bio = useAppSelector(selectBio);
	const pathname = usePathname();
	const router = useRouter();
	const [menu, setMenu] = useState<MenuItem[]>(MenuList);

	// const updateMenu = (path: string) => {
	// 	const newMenu = menu.map((item) => {
	// 		if(path=== item.path){
	// 			return {
	// 				...item,
	// 				active: true
	// 			}
	// 		}else{
	// 			return {
	// 				...item,
	// 				active: false
	// 			}
	// 		}
	// 	})

	// 	setMenu(newMenu)
	// }

	return (
		<Navbar rounded className="max-screen-xl -mt-2">
      <Navbar.Brand href="https://flowbite-react.com">
        <Image height={80} width={80} src="/assets/logo.png" alt="Shop Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span> */}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="flex items-center justify-center relative px-5">
          <span className="text-4xl"><IoMdCart onClick={()=>router.push(`/cart`)} /></span>
          <span className="absolute top-0 right-3  transform -translate-y-1/2 bg-purple-300 p-0.5 px-2 rounded-full">{count}</span>
        </div>
        <Button as={Link} href="/login">Login</Button>
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
      {menu.map((item, index) => (
					<NavbarLink
					key={index}
						as={Link}
						href={item.path}
						active={item.path === pathname}  
					>
						{item.name}
					</NavbarLink>
				))}
      </Navbar.Collapse>
    </Navbar>
	);
}


{/* <Navbar fluid rounded className="w-full">
			<NavbarBrand as={Link} href="https://flowbite-react.com">
				<img
					src={avatar}
					className="mr-3 h-6 sm:h-9"
					alt="Flowbite React Logo"
				/>
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					{bio} {count}
				</span>
			</NavbarBrand>
			<NavbarToggle />
			<NavbarCollapse>
				{menu.map((item, index) => (
					<NavbarLink
					key={index}
						as={Link}
						href={item.path}
						active={item.path === pathname}
					>
						{item.name}
					</NavbarLink>
				))}
			</NavbarCollapse>
		</Navbar> */}