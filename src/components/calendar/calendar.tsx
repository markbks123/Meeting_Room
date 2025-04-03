import { Form, Formik, FormikProps } from "formik";
import MyCalendar from "../share/calendar/calendar";
import DateRangePickerFormik from "../share/rangePicker/rangPicker";
import styles from "./calendar.module.css";
import { CalendarFromKeysProps } from "./calendar.types";
import { initialValues } from "./calendar.utils";
import { DatePicker, Space } from "antd";
import RangeDateInput from "../share/rangePicker/rangPicker";
import CalendarFrom from "./calendar.from";
const { RangePicker } = DatePicker;
const CalendarContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values); // เพิ่มการแสดงผลข้อมูลที่ส่ง
          }}
        >
          {(props: FormikProps<CalendarFromKeysProps>) => {
            return <CalendarFrom handleSignInClick={() => {}} {...props} />;
          }}
        </Formik>

        <MyCalendar />
      </div>
    </div>
  );
};

export default CalendarContainer;
