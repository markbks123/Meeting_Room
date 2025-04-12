import DataTableAntd from "../share/dataTable/dataTableAntd";
import useHistory from "./history.hooks";
import styles from "./history.module.css";

const HistoryComponent: React.FC = () => {
  const { columns, data } = useHistory();
  return (
    <div className={styles.container}>
      <DataTableAntd columns={columns} dataSource={data} />
    </div>
  );
};

export default HistoryComponent;
