import type { ComponentProps } from "react";

type H2Props = ComponentProps<"h2">;

export const H2 = ({ className = "", ...rest }: H2Props) => {
  return <h2 className={`text-6xl ${className}`} {...rest} />;
};
