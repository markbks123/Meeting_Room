import { FormikErrors, FormikProps, FormikTouched } from "formik";
import { SignUpFromKeysProps } from "../auth/signUp/signUp.types";
import { Dayjs } from "dayjs";

export interface CalendarFromKeysProps {
 
 dateRange: string; 
}



export interface  CalendarFromProps extends
FormikProps<  CalendarFromKeysProps> {
    handleSignInClick:() => void
}


export interface UseCalendarFrom {
    values: CalendarFromKeysProps ;
    errors:FormikErrors<SignUpFromKeysProps>;
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
      ) => Promise<void | FormikErrors<SignUpFromKeysProps>>;
      setFieldTouched: (
        field: string,
        isTouched?: boolean | undefined,
        shouldValidate?: boolean | undefined
      ) => void;
      setFieldError: (field: string, message: string | undefined) => void;
      touched: FormikTouched<SignUpFromKeysProps>;

}