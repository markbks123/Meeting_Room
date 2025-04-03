import styles from "./auth.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import useAuth from "./auth.hooks";
import { Formik, FormikProps } from "formik";
import { initialValuesSignIn } from "./signIn/signIn.utils";
import { SignInFromKeysProps } from "./signIn/signIn.types";
import SignInFrom from "./signIn/signIn.from";
import SignUpFrom from "./signUp/signUp.from";
import { SignUpFromKeysProps } from "./signUp/signUp.types";
import { initialValuesSignUp } from "./signUp/signUp.utils";

const AuthComponent = () => {
   const {slideDirection,showSignIn ,handleSignUpClick,handleSignInClick, handleLogin } =useAuth()

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {showSignIn ? (
          <>
            <div className={`${styles.leftContainer} ${slideDirection === 'right' ? styles.slideOutLeft : styles.slideInLeft}`}>
              <div className={styles.image}>
                <Image
                  src="/images/login.png"
                  alt="Login Image"
                  layout="responsive"
                  width={600}
                  height={600}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={`${styles.rightContainer} ${slideDirection === 'right' ? styles.slideInRight : styles.slideOutLeft}`}>
               <Formik
               enableReinitialize
               initialValues={initialValuesSignIn}
               onSubmit={(values)=>{
                console.log("Submitting form with values:", values);
                handleLogin()
               }}
               >
                  {(props: FormikProps<SignInFromKeysProps >) => {
                return <SignInFrom handleSignUpClick={handleSignUpClick} {...props} />;
        }}
               </Formik>
            </div>
          </>
        ) : (
          <>
            <div className={`${styles.leftSignupContainer} ${slideDirection === 'left' ? styles.slideOutRight : styles.slideInLeft}`}>
              <div className={styles.image}>
                <Image
                  src="/images/login.png"
                  alt="Sign Up Image"
                  layout="responsive"
                  width={600}
                  height={600}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={`${styles.rightSignupContainer} ${slideDirection === 'left' ? styles.slideInRight : styles.slideOutLeft}`}>
            <Formik
               enableReinitialize
               initialValues={initialValuesSignUp}
               onSubmit={(values)=>{
                console.log("Submitting form with values:", values);
                handleLogin()
               }}
               >
                  {(props: FormikProps<SignUpFromKeysProps >) => {
                return <SignUpFrom handleSignInClick={handleSignInClick} {...props} />;
        }}
               </Formik>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthComponent;