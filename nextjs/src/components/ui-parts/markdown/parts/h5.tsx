import type { ComponentProps } from "react";

type H5Props = ComponentProps<"h5">;

export const H5 = ({ className = "", ...rest }: H5Props) => {
	return <h2 className={`text-2xl ${className}`} {...rest} />;
};
