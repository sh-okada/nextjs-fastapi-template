import { Link as CoreLink } from "@/components/core/link";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ReactNode } from "react";

export type NextLinkProps = LinkProps & {
	children?: ReactNode;
};

export const NextLink = ({ children, ...rest }: NextLinkProps) => {
	return (
		<CoreLink asChild>
			<Link {...rest}>{children}</Link>
		</CoreLink>
	);
};
