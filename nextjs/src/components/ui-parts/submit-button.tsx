import type { ButtonProps } from "@/components/core/button";

export type SubmitButtonProps = Omit<ButtonProps, "type">;

export const SubmitButton = (props: SubmitButtonProps) => {
	return <button type="submit" {...props} />;
};
