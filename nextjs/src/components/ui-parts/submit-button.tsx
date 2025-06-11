import { Button, type ButtonProps } from "@/components/core/button";

export type SubmitButtonProps = Omit<ButtonProps, "type">;

export const SubmitButton = (props: SubmitButtonProps) => {
	return <Button type="submit" {...props} />;
};
