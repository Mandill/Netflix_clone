// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMmzA_DtG6TuVTUBfrHzriP9GPXXc0pro",
  authDomain: "netflix-react-clone-aeb3b.firebaseapp.com",
  projectId: "netflix-react-clone-aeb3b",
  storageBucket:"netflix-react-clone-aeb3b.appspot.com",
  messagingSenderId: "974508694813",
  appId: "1:974508694813:web:073d75837278201327d5f4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app)