import { Input, type InputProps } from "@/components/core/input";

export type DatePickerProps = Omit<InputProps, "type">;

export const DatePicker = (props: DatePickerProps) => {
	return <Input {...props} type="date" />;
};
