import { Table, type TableProps } from "@/components/core/table/table";

export const MdTable = ({ className = "", ...rest }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <Table className={`w-full min-w-3xl ${className}`} {...rest} />
    </div>
  );
};
