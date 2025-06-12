import { Link } from "@/components/core/link";
import type { ComponentProps } from "react";

type ATagProps = Omit<ComponentProps<"a">, "target" | "rel">;

export const ATag = (props: ATagProps) => {
	return <Link target="_blank" rel="noopener noreferrer" {...props} />;
};
