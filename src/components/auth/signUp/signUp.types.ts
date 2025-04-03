import { FormikErrors, FormikProps, FormikTouched } from "formik";

export interface SignUpFromKeysProps {
   email:string;
   name:string;
   lastname:string
   team:number | null;
   password:string;


}

export interface  SignUpFromProps extends
FormikProps< SignUpFromKeysProps> {
    handleSignInClick:() => void
}


export interface UseSignUpFrom {
    values:SignUpFromKeysProps ;
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