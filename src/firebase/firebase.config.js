// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-zxAlWYpMLiWlRPiFLrv-V1KdeLyaXXs",
  authDomain: "press-pass.firebaseapp.com",
  projectId: "press-pass",
  storageBucket: "press-pass.appspot.com",
  messagingSenderId: "982505340395",
  appId: "1:982505340395:web:e29c8ee8f6ac7f134aadae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;