import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils.js";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  // useEffect(() => {
  //   const data = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   };

  //   return data;
  // }, []);

  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef, "ref");
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGooglePopupUser}>Sign-in with Google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign-in with Google re-direct
      </button> */}
    </div>
  );
};

export default SignIn;
