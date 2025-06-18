import type { ComponentProps, FunctionComponent } from "react";

export const HorizonTalTh = ({ className = "", ...rest }: ThProps) => (
  <th
    className={`px-4 py-5 text-start align-top ${className}`}
    scope="row"
    {...rest}
  />
);

export type ThProps = ComponentProps<"th">;

export const Th: FunctionComponent<ThProps> & {
  Horizontal: typeof HorizonTalTh;
} = (props: ThProps) => {
  return <th {...props} />;
};

Th.Horizontal = HorizonTalTh;
