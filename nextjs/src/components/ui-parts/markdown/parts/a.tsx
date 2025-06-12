import { Link } from "@/components/core/link";
import type { ComponentProps } from "react";

type AProps = Omit<ComponentProps<"a">, "target" | "rel">;

export const A = (props: AProps) => {
	return <Link target="_blank" rel="noopener noreferrer" {...props} />;
};
