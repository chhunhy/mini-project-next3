"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
	selectProducts,
	selectTotalPrice,
} from "@/redux/features/cart/cartSlice";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { removeFromCart } from "@/redux/features/cart/cartSlice";

export default function Cart() {
	const products = useAppSelector(selectProducts);
	const totalPrice = useAppSelector(selectTotalPrice);
	const dispatch = useAppDispatch();
	return (
		<main className="max-w-screen-xl flex  mx-auto bg-red-200 h-screen">
			<section className=" w-[800px] bg-blue-200 h-32 pr-32">
				<section className="flex justify-between">
					<h1 className="text-3xl font-semibold">name</h1>
					<p>items</p>
				</section>
				<hr />
				<section>
					<h3>Product Detail</h3>
					

				</section>
			</section>
			<section className="w-[500px] bg-purple-200 h-32">

			</section>
		</main>
	);
}


// {products.length == 0 && <h1 className="text-6xl">This cart is empty</h1>}
// 			{products.length !== 0 && (
// 				<div>
// 					<h1 className="text-6xl">
// 						Total Product{" "}
// 						<span className="text-red-500">{products.length}</span>
// 					</h1>
// 					<h2 className="text-4xl">
// 						Total Price $ <span className="text-red-500">{totalPrice}</span>
// 					</h2>
// 				</div>
// 			)}

// 			{products.length !== 0 &&
// 				products.map((product) => (
// 					<div
// 						className="flex justify-between w-1/2 bg-gray-300 my-4 p-4 rounded-xl"
// 						key={product.id}
// 					>
// 						<div>
// 							<h1>{product.name}</h1>
// 							<h2 className="text-red-500">${product.price}</h2>
// 							<img
// 								className="h-[100px]"
// 								src={product.image}
// 								alt={product.name}
// 							/>
// 						</div>
// 						<div>
// 							<button
// 								onClick={() => dispatch(removeFromCart(product.id))}
// 								className="bg-red-500 text-white p-2 rounded-xl"
// 							>
// 								Remove
// 							</button>
// 						</div>
// 					</div>
// 				))}