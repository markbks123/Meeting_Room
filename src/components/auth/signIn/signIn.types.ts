import { FormikErrors, FormikProps, FormikTouched } from "formik";

export interface SignInFromKeysProps {
    userName:string;
    passwords:string;
}

export interface  SignInFromProps extends
FormikProps<SignInFromKeysProps> {
  handleSignUpClick:() => void
 
}



export interface UseSignInFrom {
    values:SignInFromKeysProps ;
    errors:FormikErrors<SignInFromKeysProps>;
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined
      ) => Promise<void | FormikErrors<SignInFromKeysProps>>;
      setFieldTouched: (
        field: string,
        isTouched?: boolean | undefined,
        shouldValidate?: boolean | undefined
      ) => void;
      setFieldError: (field: string, message: string | undefined) => void;
      touched: FormikTouched<SignInFromKeysProps>;

}