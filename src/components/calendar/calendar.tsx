"use client";
import { Form, Formik, FormikProps } from "formik";
import MyCalendar from "../share/calendar/calendar";

import styles from "./calendar.module.css";
import { CalendarFromKeysProps } from "./calendar.types";
import { initialValues } from "./calendar.utils";

import CalendarFrom from "./calendar.from";
import HistoryComponent from "../history/history";

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
        <div className= {styles.fitterContainer}>
        <div className={styles["w-30"]}>
          <button type="submit" className={styles.submit}>
             Search
          </button>
        </div>
        </div>
       
     
      </div>
      <div className= {styles.addContainer}>
          <div>
          <button type="submit" className={styles.submit}>
            Booking
          </button>
          </div>
          <div>
          <button type="submit" className={styles.submit}>
          history
          </button>
          </div>
        </div>
        <HistoryComponent />
        {/* <MyCalendar /> */}
    </div>
  );
};

export default CalendarContainer;
