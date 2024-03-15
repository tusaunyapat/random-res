// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWmxZjE7J6_nRqEWfslvo0bmn_hpgtJsI",
  authDomain: "random-restaurant-34251.firebaseapp.com",
  projectId: "random-restaurant-34251",
  storageBucket: "random-restaurant-34251.appspot.com",
  messagingSenderId: "88313797324",
  appId: "1:88313797324:web:69f2d42aa04aa04811c069",
  measurementId: "G-TM00P5PPKY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
