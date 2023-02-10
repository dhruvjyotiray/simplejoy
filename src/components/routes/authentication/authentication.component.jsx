import SignUpForm from "../../sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../sign-in-form/sign-in-form.component.jsx";
import "./authentication.styles.scss"

const Authentication = () => {
  // useEffect(() => {
  //   const data = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   };

  //   return data;
  // }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
