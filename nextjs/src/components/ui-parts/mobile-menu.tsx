"use client";

import { Button } from "@/components/core/button";
import { type ReactNode, useRef } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export type MobileMenuProps = {
	children?: ReactNode;
};

export const MobileMenu = ({ children }: MobileMenuProps) => {
	const drawerRef = useRef<HTMLDialogElement>(null);

	return (
		<>
			<div className="p-4">
				<Button
					variant="text"
					type="button"
					onClick={() => drawerRef.current?.showModal()}
				>
					<FaBars />
				</Button>
			</div>
			<dialog
				className="m-[unset] max-w-[unset] max-h-[unset] w-full h-dvh bg-white"
				ref={drawerRef}
			>
				<div className="flex justify-end p-4">
					<Button
						variant="text"
						type="button"
						onClick={() => drawerRef.current?.close()}
					>
						<FaXmark />
					</Button>
				</div>
				{children}
			</dialog>
		</>
	);
};
