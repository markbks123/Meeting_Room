import { Form } from "formik";

import { SignUpFromProps } from "./signUp.types";
import styles from "./signUp.form.module.css";
import Input from "@/components/share/input/input";
import useSignUpFrom from "./signUp.from.hooks";
import PasswordInput from "@/components/share/input/passwordInput";

const SignUpFrom = ({
  values,
  errors,
  dirty,
  touched,
  setFieldValue,
  setFieldTouched,
  setFieldError,
  handleSignInClick
}: SignUpFromProps) => {
  const {} = useSignUpFrom({
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
            label="name"
            type="text"
            id="name"
            name="name"
            placeholder="โปรดระบุ"
          />
        </div>

        <div className={styles["w-100"]}>
          <Input
            label="lastname"
            type="text"
            id="lastname"
            name="lastname"
            placeholder="โปรดระบุ"
          />
        </div>
        <div className={styles["w-100"]}>
          <Input
            label="Team"
            type="text"
            id="team"
            name="team"
            placeholder="โปรดระบุ"
          />
        </div>
       
           <div className={styles["w-100"]}>
          <Input
            label="E-mail"
            type="text"
            id="email"
            name="email"
            placeholder="โปรดระบุ"
          />
      
    
        </div>
        <div className={styles["w-100"]}>
          <PasswordInput
            label="password"
            type="text"
            id="password"
            name="password"
            placeholder="โปรดระบุ"
          />
      
    
        </div>
          <button type="submit"   className={styles.submit} >
               SIGN IN
          </button>
     
        <div className={styles.signInTextContainer}>
          <p>Don't have an account?</p>
          <p className={styles.signInText} onClick={handleSignInClick}>
            Sign Up
          </p>
        </div>
      </section>
    </Form>
  );
};


export default SignUpFrom 