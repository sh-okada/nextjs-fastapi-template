import { Col } from "@/components/core/table/parts/col";
import { Td } from "@/components/core/table/parts/td";
import { Th } from "@/components/core/table/parts/th";
import type { ComponentProps, FunctionComponent } from "react";

export type TableProps = ComponentProps<"table">;

export const Table: FunctionComponent<TableProps> & {
  Col: typeof Col;
  Th: typeof Th;
  Td: typeof Td;
} = (props: TableProps) => {
  return <table {...props} />;
};

Table.Col = Col;
Table.Th = Th;
Table.Td = Td;
