import type { ComponentProps } from "react";

type H4Props = ComponentProps<"h4">;

export const H4 = ({ className = "", ...rest }: H4Props) => {
	return <h2 className={`text-4xl ${className}`} {...rest} />;
};
