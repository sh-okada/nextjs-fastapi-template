import { Input, type InputProps } from "@/components/core/input";
import { Label } from "@/components/core/label";

export type RadioProps = Omit<InputProps, "type">;

export const Radio = ({ children, ...props }: RadioProps) => {
	return (
		<Label className="flex items-center gap-1">
			<Input type="radio" {...props} />
			<span>{children}</span>
		</Label>
	);
};
