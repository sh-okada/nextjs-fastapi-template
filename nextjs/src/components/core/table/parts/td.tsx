import type { ComponentProps, FunctionComponent } from "react";

export const HorizonTalTd = ({ className = "", ...rest }: TdProps) => (
  <th className={`px-4 py-5 align-top ${className}`} {...rest} />
);

export type TdProps = ComponentProps<"td">;

export const Td: FunctionComponent<TdProps> & {
  Horizontal: typeof HorizonTalTd;
} = (props: TdProps) => {
  return <th {...props} />;
};

Td.Horizontal = HorizonTalTd;
