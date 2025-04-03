import { Form } from "formik";
import useSignInFrom from "./signIn.from.hooks"
import { SignInFromProps } from "./signIn.types";
import styles from "./signIn.form.module.css";
import Input from "@/components/share/input/input";

const SignInFrom = ({
  values,
  errors,
  dirty,
  touched,
  setFieldValue,
  setFieldTouched,
  setFieldError,
  handleSignUpClick
}: SignInFromProps) => {
  const {} = useSignInFrom({
    values,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    setFieldError,
  });

  return (
    <Form className={styles.container}>
      <section className={styles.form}>
        <div className={styles.header}>
        <h2>SIGN IN</h2>
        </div>
        <div className={styles["w-100"]}>
          <Input
            label="username"
            type="text"
            id="userName"
            name="userName"
            placeholder="โปรดระบุ"
          />
        </div>

        <div className={styles["w-100"]}>
          <Input
            label="password"
            type="text"
            id="passwords"
            name="passwords"
            placeholder="โปรดระบุ"
          />
        </div>
    
          <button type="submit"   className={styles.submit} >
            LOGIN
          </button>
     
        <div className={styles.signUpTextContainer}>
          <p>Don't have an account?</p>
          <p className={styles.signUpText} onClick={handleSignUpClick}>
            Sign Up
          </p>
        </div>
      </section>
    </Form>
  );
};


export default  SignInFrom