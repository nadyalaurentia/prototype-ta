// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlWj65dCCVj2Cfu71FyVpa038xsajf2Yw",
  authDomain: "prototype-ta-nadya.firebaseapp.com",
  projectId: "prototype-ta-nadya",
  storageBucket: "prototype-ta-nadya.appspot.com",
  messagingSenderId: "966417842508",
  appId: "1:966417842508:web:c1717079ca3a99a9160fe9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;