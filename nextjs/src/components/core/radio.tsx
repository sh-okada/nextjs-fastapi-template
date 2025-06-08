import type { ComponentProps } from "react";

export type RadioProps = ComponentProps<"input">;

export const Radio = ({ children, ...props }: RadioProps) => {
	return (
		<label className="flex items-center gap-1">
			<input type="radio" {...props} />
			<span>{children}</span>
		</label>
	);
};
