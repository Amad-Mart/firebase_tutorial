// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5H03Js51pSEH8VHv74umgaZz72yJalzA",
  authDomain: "fir-blog-ab06d.firebaseapp.com",
  projectId: "fir-blog-ab06d",
  storageBucket: "fir-blog-ab06d.appspot.com",
  messagingSenderId: "550942264208",
  appId: "1:550942264208:web:48326be05d1bd0a110c115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize db inside project
export const db = getFirestore(app);
export const auth = getAuth(app);
//creates instance of class
export const provider = new GoogleAuthProvider();