import type { ComponentProps } from "react";

type H6Props = ComponentProps<"h6">;

export const H6 = ({ className = "", ...rest }: H6Props) => {
  return <h2 className={`text-xl ${className}`} {...rest} />;
};
