import type { ComponentProps } from "react";

export type InputProps = ComponentProps<"input">;

export const Input = ({ ...props }: InputProps) => {
	return <input {...props} />;
};
