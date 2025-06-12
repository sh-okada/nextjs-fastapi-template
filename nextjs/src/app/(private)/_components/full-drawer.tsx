import { Button } from "@/components/core/button";
import { type ReactNode, type RefObject, useRef } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export type FullDrawerProps = {
	children: (drawerRef: RefObject<HTMLDialogElement | null>) => ReactNode;
};

export const FullDrawer = ({ children }: FullDrawerProps) => {
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
				{children(drawerRef)}
			</dialog>
		</>
	);
};
