import type { ComponentProps } from "react";

type H3Props = ComponentProps<"h3">;

export const H3 = ({ className = "", ...rest }: H3Props) => {
  return <h2 className={`text-5xl ${className}`} {...rest} />;
};
