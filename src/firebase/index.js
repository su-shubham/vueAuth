// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvrtmEtuLz-P6x67Ccyh1nng7ctjmEM94",
  authDomain: "todo-vue-fireba.firebaseapp.com",
  projectId: "todo-vue-fireba",
  storageBucket: "todo-vue-fireba.appspot.com",
  messagingSenderId: "613321363663",
  appId: "1:613321363663:web:6ec0ed5c52bc9ba5e5e7ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export  {auth}