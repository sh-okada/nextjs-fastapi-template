import { Ol as CoreOl } from "@/components/core/ol";
import type { ComponentProps } from "react";

export type OlProps = ComponentProps<"ol">;

export const Ol = (props: OlProps) => {
	return <CoreOl {...props} />;
};
