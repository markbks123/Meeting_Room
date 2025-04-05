import { Form } from "formik";
import styles from "./createCalendar.from.module.css";
import Input from "@/components/share/input/input";
import RangeDateInput from "@/components/share/rangePicker/rangPicker";
import TextArea from "@/components/share/textArea/textArea";
import { CreateCalendarModalFormProps } from "../calendarModal.types";
const CreateCalendarFrom = ({
  values,
  errors,
  setFieldValue,
  touched,
  closeModal,
}: CreateCalendarModalFormProps) => {
  return (
    <Form className={styles.container}>
      <h1>Booksing</h1>
      <section>
        <RangeDateInput name="date" label="Date" />
        <Input name="caption" label={"Agenda"} id="name" placeholder="Agenda" />
        <TextArea
          id="remark"
          name={"remark"}
          label={"note"}
          placeholder={"โปรดระบุ"}
          maxLength={256}
          counter
          required
        />
      </section>
    </Form>
  );
};


export default CreateCalendarFrom