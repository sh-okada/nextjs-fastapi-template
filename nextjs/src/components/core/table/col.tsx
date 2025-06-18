import type { ComponentProps, FunctionComponent } from "react";

export type ColProps = ComponentProps<"col">;

export const HorizontalHeaderCol = () => (
  <Col className="border-r border-black bg-gray-100" />
);

export const Col: FunctionComponent<ColProps> & {
  HorizontalHeader: typeof HorizontalHeaderCol;
} = (props: ColProps) => {
  return <col {...props} />;
};

Col.HorizontalHeader = HorizontalHeaderCol;
