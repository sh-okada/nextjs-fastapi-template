import type { ComponentProps } from "react";

type RadioGroupProps = Omit<ComponentProps<"div">, "children"> & {
	inputProps: ComponentProps<"input">;
	children: (
		name: string | undefined,
		defaultValue: string | number | readonly string[] | undefined,
	) => React.ReactNode;
};

export const RadioGroup = ({
	className = "",
	inputProps,
	children,
	...props
}: RadioGroupProps) => {
	return (
		<div className={`flex gap-2 ${className}`} {...props}>
			{children(inputProps.name, inputProps.defaultValue)}
		</div>
	);
};
