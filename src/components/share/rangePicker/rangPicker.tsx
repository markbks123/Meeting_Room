
"use client"
import { ConfigProvider, DatePicker } from "antd";
import th from "antd/es/date-picker/locale/th_TH";
import cx from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { useField } from "formik";
import styles from "./rangePicker.module.css";
import { RangeDateInputProps } from "./rangePicker.types";

// 📌 Setup dayjs for Thai and Buddhist Era
dayjs.extend(buddhistEra);
dayjs.locale("th");

const { RangePicker } = DatePicker;

const RangeDateInput= ({
  name,
  label,
  className,
  required = false,
  minDate,
  maxDate,
  placeholder = "",
  disabled = false,
  disabledDate,
  onChange = () => {},
}: RangeDateInputProps) => {
  const [field, meta, helper] = useField(name);

  const handleRangeChange = (dates: any) => {
    helper.setValue(dates);
    helper.setTouched(true);
    onChange(dates);
  };

  return (
    <div
      className={
        label
          ? cx(styles.container, className)
          : cx(styles.container, styles.withoutLabel, className)
      }
    >
      {label && (
        <label htmlFor={name}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <ConfigProvider >
        <RangePicker
          className={styles.rangePickerMod}
          value={field.value}
          onChange={handleRangeChange}
          placeholder={["Start Date", "End Date"]}
          disabledDate={disabledDate}
          format="DD/MM/BBBB"
          disabled={disabled}
        />
      </ConfigProvider>
      {meta.error && meta.touched && (
        <small className={styles.error}>{meta.error}</small>
      )}
    </div>
  );
};

export default RangeDateInput;
