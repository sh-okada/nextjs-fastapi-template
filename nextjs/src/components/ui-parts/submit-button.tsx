import type { ButtonProps } from "@/components/core/button";
import type { ComponentProps } from "react";

export type SubmitButtonProps = Omit<ButtonProps, "type">;

export const SubmitButton = (props: SubmitButtonProps) => {
	return <button type="submit" {...props} />;
};
