import { Slot } from "@/components/core/slot";
import type { ComponentProps } from "react";

const linkStyle = "text-blue-900";

export type LinkProps = { className?: string } & (
	| ({ asChild?: false } & ComponentProps<"a">)
	| { asChild: true; children: React.ReactNode }
);

export const Link = ({
	asChild,
	children,
	className = "",
	...rest
}: LinkProps) => {
	if (asChild) {
		return (
			<Slot className={`${linkStyle} ${className}`} {...rest}>
				{children}
			</Slot>
		);
	}

	return (
		<a className={`${linkStyle} ${className}`} {...rest}>
			{children}
		</a>
	);
};
