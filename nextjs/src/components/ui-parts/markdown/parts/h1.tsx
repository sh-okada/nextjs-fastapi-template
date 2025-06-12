import type { ComponentProps } from "react";

type H1Props = ComponentProps<"h1">;

export const H1 = ({ className = "", ...rest }: H1Props) => {
  return <h1 className={`text-8xl ${className}`} {...rest} />;
};
