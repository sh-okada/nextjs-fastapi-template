import { Input } from "@/components/core/input";
import { Label } from "@/components/core/label";
import type { ComponentProps } from "react";

export type RadioProps = ComponentProps<"input">;

export const Radio = ({ children, ...props }: RadioProps) => {
	return (
		<Label className="flex items-center gap-1">
			<Input type="radio" {...props} />
			<span>{children}</span>
		</Label>
	);
};
