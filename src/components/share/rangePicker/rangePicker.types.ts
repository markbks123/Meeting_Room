import { DatePickerProps } from "antd";

export interface RangeDateInputProps {
  name: string;
  label?: string;
  className?: string;
  required?: boolean;
  onChange?: (e: Date) => void;
  minDate?: Date | null;
  maxDate?: Date | null;
  placeholder?: string;
  disabled?: boolean;
  disabledDate?: DatePickerProps["disabledDate"];
}
