import type { ComponentProps } from "react";

export type TableProps = ComponentProps<"table">;

export const Table = (props: TableProps) => {
  return <table {...props} />;
};
