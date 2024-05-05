'use client'
import React from "react";
import { Spinner } from "flowbite-react";
export default function Loading() {
	return (
		<div className="h-screen grid place-content-center">
			<Spinner aria-label="Extra large spinner example" size="xl" />
		</div>
	);
}
