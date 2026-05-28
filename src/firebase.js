// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqTJP0e_yh9AVGXR5uoRlcdVuToI2KMDo",
  authDomain: "intership-project-ac687.firebaseapp.com",
  projectId: "intership-project-ac687",
  storageBucket: "intership-project-ac687.firebasestorage.app",
  messagingSenderId: "712010393325",
  appId: "1:712010393325:web:2a38326ca44fd0bf5ecee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);