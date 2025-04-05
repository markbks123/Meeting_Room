import styles from "./textArea.module.css";
import { TextAreaProps } from "./textArea.types";
import cx from "classnames";
import { useTextArea } from "./textArea.hooks";

const TextArea = ({
  name,
  className = "",
  label,
  required = false,
  maxLength,
  placeholder,
  counter = false,
  ...props
}: TextAreaProps) => {
  const { field, meta } = useTextArea({ name });

  return (
    <div className={cx(styles.container, className)}>
      {label && (
        <label htmlFor={props.id || name}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <textarea
        {...field}
        {...props}
        id="message"
        maxLength={maxLength}
        placeholder={placeholder}
        rows={4}
        className={meta.touched && meta.error ? styles.error : ""}
      />
      {counter && (
        <small id="counter" className={styles.counter}>
          0/{maxLength}
        </small>
      )}
      {meta.touched && meta.error && (
        <small className={styles.error}>{meta.error}</small>
      )}
    </div>
  );
};

export default TextArea;
