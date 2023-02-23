import { useState } from "react";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";

import FormInput from "../form-input/form-input.component.jsx";
import "./sign-in-form.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component.jsx";

const GoogleLogo = () => {
  return (
    <img
      src="https://i.ibb.co/HFqJx8Z/google-318-278809.png"
      alt="Google logo"
      style={{
        width: "25px",
        marginRight: "10px",
      }}
    />
  );
};

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user, "sign-in response");

      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("The password entered is incorrect");
          break;
        case "auth/user-not-found":
          alert("This account does not exist");
          break;
        default:
          console.log(err);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and passowrd</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            <GoogleLogo /> Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
