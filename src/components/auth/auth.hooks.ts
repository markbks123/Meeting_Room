import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useAuth = () => {
    const router = useRouter();
  const [showSignIn, setShowSignIn] = useState<boolean>(true);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const handleLogin = () =>{
    router.push({
        pathname: `/calendar`
         },
      );
  }

  const handleSignUpClick = () => {
    setSlideDirection("left");
    setTimeout(() => {
      setShowSignIn(false);
    }, 500);
  };

  const handleSignInClick = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setShowSignIn(true);
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideDirection(showSignIn ? "right" : "left");
    }, 500);
    return () => clearTimeout(timer);
  }, [showSignIn]);


  return {
    showSignIn,
    slideDirection,
    handleSignUpClick,
    handleSignInClick,
    handleLogin
  };
};

export default useAuth;
