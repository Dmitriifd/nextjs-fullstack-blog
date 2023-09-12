// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjs-fullstack-blog.firebaseapp.com",
  projectId: "nextjs-fullstack-blog",
  storageBucket: "nextjs-fullstack-blog.appspot.com",
  messagingSenderId: "767206451131",
  appId: "1:767206451131:web:30397f43c78d669558469e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);