import type { ComponentProps } from "react";

export type SubmitButtonProps = ComponentProps<"button">;

export const SubmitButton = ({ ...props }: SubmitButtonProps) => {
	return <button type="submit" {...props} />;
};
