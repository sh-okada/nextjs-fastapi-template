import { Ul as CoreUl } from "@/components/core/ul";
import type { ComponentProps } from "react";

export type UlProps = ComponentProps<"ul">;

export const Ul = (props: UlProps) => {
	return <CoreUl {...props} />;
};
