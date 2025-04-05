import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
  counter?: boolean;
}

export interface UseTextAreaProps {
  name: string;
}
