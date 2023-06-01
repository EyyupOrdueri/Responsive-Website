// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
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

import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const db = getDatabase();

var namebox = document.getElementById("Namebox");
var id = document.getElementById("ID");
var descbox = document.getElementById("Desc");

var insBtn = document.getElementById("Insbtn");
var selBtn = document.getElementById("Selbtn");

function InsertData() {
  set(ref(db, "Employers/" + id.value), {
    Name: namebox.value,
    ID: id.value,
    Description: descbox.value,
  })
    .then(() => {
      alert("data stored successfully");
    })
    .catch((error) => {
      alert("unsuccessful, erorr" + error);
    });
}

function SelectionData() {
  const dbref = ref(db);

  get(child(dbref, "Employers/" + id.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        namebox.value = snapshot.val().Name;
        descbox.value = snapshot.val().Description;
      } else {
        alert("No data found");
      }
    })
    .catch((error) => {
      alert("unsuccessful, erorr" + error);
    });
}

insBtn.addEventListener("click", InsertData);
selBtn.addEventListener("click", SelectionData);
