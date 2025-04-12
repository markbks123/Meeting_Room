import { Table } from "antd";
import { DataTableAntdProps } from "./dataTableAntd.types";

const DataTableAntd = <T extends Record<string, any>>({
    columns,
    dataSource,
    expandedRowRender,
  }: DataTableAntdProps<T>) => {
    return (
      <Table
      bordered
       dataSource={dataSource}
       columns={columns}
       expandable={
        expandedRowRender
          ? { expandedRowRender, defaultExpandedRowKeys: ["0"] }
          : undefined
      }
      pagination={false}
      />
    );
  }


export default DataTableAntd