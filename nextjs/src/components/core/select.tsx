import type { ComponentProps, FunctionComponent } from "react";

type SelectItemProps = ComponentProps<"option">;

const SelectItem = ({ ...props }: SelectItemProps) => {
	return <option {...props} />;
};

export type SelectItems = { value: string; label: string }[];
export type SelectProps = ComponentProps<"select">;

export const Select: FunctionComponent & { Item: typeof SelectItem } = ({
	...props
}: SelectProps) => {
	return <select {...props} />;
};

Select.Item = SelectItem;
