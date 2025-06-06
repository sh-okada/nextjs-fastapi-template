import type { ComponentProps } from "react";

export type SubmitButtonProps = ComponentProps<"button">;

export const SubmitButton = ({
	className = "",
	...props
}: SubmitButtonProps) => {
	return <button className={`${className}`} type="submit" {...props} />;
};
