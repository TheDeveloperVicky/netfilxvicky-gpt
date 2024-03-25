// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9QPMHrYtYr-rp768BONYHrr07x5RqmiQ",
  authDomain: "netflixgpt-b02c1.firebaseapp.com",
  projectId: "netflixgpt-b02c1",
  storageBucket: "netflixgpt-b02c1.appspot.com",
  messagingSenderId: "224451893126",
  appId: "1:224451893126:web:c61b40ff94c66e7b463e07",
  measurementId: "G-KLTQ4KPWH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
 

//email : vick@gmail.com password : Vicky@123