import { TableColumnsType } from "antd";


export interface DataTableAntdProps<T extends Record<string,any>>{
    columns: TableColumnsType<T>;
    dataSource: T[];
    expandedRowRender?:(record: T) => React.ReactNode
}