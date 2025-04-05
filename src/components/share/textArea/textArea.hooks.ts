import { useField } from "formik";
import { useEffect } from "react";
import { UseTextAreaProps } from "./textArea.types";

export const useTextArea = ({ name }: UseTextAreaProps) => {
  const [field, meta] = useField(name);

  useEffect(() => {
    const messageEle: HTMLElement | null = document.getElementById("message");
    const counterEle: HTMLElement | null = document.getElementById("counter");

    const handleTyping = (e?: Event) => {
      const target = e
        ? (e.target as HTMLInputElement)
        : (messageEle as HTMLInputElement);
      const maxLength = target.getAttribute("maxlength");
      const currentLength = target.value.length;

      if (counterEle) {
        if (maxLength !== null) {
          counterEle.innerHTML = `${currentLength}/${maxLength}`;
        } else {
          counterEle.innerHTML = `${currentLength}`;
        }
      }
    };

    // Manually trigger handleTyping for initial value
    if (messageEle) {
      handleTyping();
      messageEle.addEventListener("input", handleTyping);
    }

    return () => {
      if (messageEle) {
        messageEle.removeEventListener("input", handleTyping);
      }
    };
  }, [field.value]);

  return { field, meta };
};
