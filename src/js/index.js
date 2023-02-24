// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCne9ntqsLn-N1WRczgs5gDvTZbmE8U_SM",
  authDomain: "literame-git.firebaseapp.com",
  projectId: "literame-git",
  storageBucket: "literame-git.appspot.com",
  messagingSenderId: "131051715700",
  appId: "1:131051715700:web:3bedf0eaf12215355e2521",
  measurementId: "G-BWC828YLS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);