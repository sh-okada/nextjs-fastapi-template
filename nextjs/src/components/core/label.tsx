import type { ComponentProps } from "react";

export type LabelProps = ComponentProps<"label">;

export const Label = ({ className = "", ...props }: LabelProps) => {
	// biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
	return <label className={className} {...props} />;
};
