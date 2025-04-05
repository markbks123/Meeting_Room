import { Form } from "formik";
import { CalendarFromProps } from "./calendar.types";
import styles from "./calendar.from.module.css";

import RangeDateInput from "../share/rangePicker/rangPicker";
import Selecter from "../share/select/select";

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
      <div className={styles.header}>
        <h2>Filter</h2>
      </div>
      <section className={styles.form}>
        <div>
          <RangeDateInput name="dateRange" label="Date" />
        </div>

        <div className={styles.selecter}>
          <Selecter
            name="dssdsds"
            options={[
              {
                value: "1",
                label: "ADD",
              },
              {
                value: "2",
                label: "Friday",
              },
              {
                value: "3",
                label: "RVP",
              },
            ]}
            label="Team"
          />
        </div>
        
      </section>
    </Form>
  );
};

export default CalendarFrom;

{
  /* <div>
<button type="submit" className={styles.submit}>
 Booking
</button>
</div>
<div>
<button type="submit" className={styles.submit}>
 Booking
</button>
</div> */
}
