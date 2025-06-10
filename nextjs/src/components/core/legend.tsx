import type { ComponentProps } from "react";

export type LegendProps = ComponentProps<"legend">;

export const Legend = ({ className = "", ...props }: LegendProps) => {
	return <legend className={className} {...props} />;
};
