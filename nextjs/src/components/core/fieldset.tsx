import { Legend } from "@/components/core/legend";
import type { ComponentProps, FunctionComponent } from "react";

export type FieldsetProps = ComponentProps<"fieldset">;

export const Fieldset: FunctionComponent<FieldsetProps> & {
	Legend: typeof Legend;
} = ({ className = "", ...props }: FieldsetProps) => {
	return <fieldset className={className} {...props} />;
};

Fieldset.Legend = Legend;
