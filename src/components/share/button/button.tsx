import { ButtonProps } from "./button.types";
import cx from "classnames";
import styles from "./button.module.css"
const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = "button",
    disabled = false,
    className = "",
  }) => {
    return (
      <button
        type={type}
        className={cx(styles.button, className)}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  