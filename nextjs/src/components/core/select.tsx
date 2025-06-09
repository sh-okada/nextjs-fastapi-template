import type { ComponentProps, FunctionComponent } from "react";

type SelectItemProps = ComponentProps<"option">;

const SelectItem = ({ className = "", ...props }: SelectItemProps) => {
	return <option className={className} {...props} />;
};

export type SelectItems = { value: string; label: string }[];
export type SelectProps = ComponentProps<"select">;

export const Select: FunctionComponent & { Item: typeof SelectItem } = ({
	className = "",
	...props
}: SelectProps) => {
	return <select className={className} {...props} />;
};

Select.Item = SelectItem;
