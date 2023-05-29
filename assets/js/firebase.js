// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, child, get } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-ObwcTBsZGHzYFrjfKKbpk2leychl-3k",
  authDomain: "coinmarketjob.firebaseapp.com",
  databaseURL: "https://coinmarketjob-default-rtdb.firebaseio.com",
  projectId: "coinmarketjob",
  storageBucket: "coinmarketjob.appspot.com",
  messagingSenderId: "752799271624",
  appId: "1:752799271624:web:53695923b3d4247a4ab3fd",
  measurementId: "G-0EFMDHZ4J3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);
