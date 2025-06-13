import type { ComponentProps } from "react";

export type SectionHeaderProps = ComponentProps<"h2">;

export const SectionHeader = ({
  className = "",
  ...rest
}: SectionHeaderProps) => {
  return <h2 className={`text-xl ${className}`} {...rest} />;
};
