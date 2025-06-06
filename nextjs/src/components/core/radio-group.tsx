import type { getInputProps } from "@conform-to/react";

type RadioGroupProps = {
	inputProps: ReturnType<typeof getInputProps>;
	children: (id: string, initialValue: string | undefined) => React.ReactNode;
};

export const RadioGroup = ({ inputProps, children }: RadioGroupProps) => {
	return <div>{children(inputProps.id, inputProps.defaultValue)}</div>;
};
