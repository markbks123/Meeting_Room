import { Form } from "formik";
import { CalendarFromProps } from "./calendar.types";
import styles from "./calendar.from.module.css";

import RangeDateInput from "../share/rangePicker/rangPicker";

const CalendarFrom = ({
  values,
  errors,
  dirty,
  touched,
  setFieldValue,
  setFieldTouched,
  setFieldError,
  handleSignInClick,
}: CalendarFromProps) => {
  return (
    <Form className={styles.container}>
      <section className={styles.form}>
        <div className={styles.header}>
          <h2>Booking</h2>
        </div>
        <div>
          <RangeDateInput name="dateRange" required />
        </div>
        <div>
          <button type="submit" className={styles.submit}>
            SUBMIT
          </button>
        </div>
      </section>
    </Form>
  );
};

export default CalendarFrom;
