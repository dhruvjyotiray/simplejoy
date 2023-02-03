import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTO3qak_YrlIdLecYh4vwYfn1taYp8024",
  authDomain: "simplejoy-db.firebaseapp.com",
  projectId: "simplejoy-db",
  storageBucket: "simplejoy-db.appspot.com",
  messagingSenderId: "405330271430",
  appId: "1:405330271430:web:26d3805f889010055e8bc7",
  measurementId: "G-06054M8ZQK",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef, "I am the REF*");

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot, "User snapshot");
  console.log(userSnapshot.exists());

  //If User Data exists, return UserDocRef

  //If User Data does NOT exist, create/set the document with data from userAuth in my collection

  if (!userSnapshot.exists()) {
    const { profileName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        profileName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log("Error creating the user", err);
    }
  } else {
    return userDocRef;
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
