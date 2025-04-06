// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqPfrIGjfbflRCxp58DJzdDIHnjjE75zg",
  authDomain: "salitre-da613.firebaseapp.com",
  databaseURL: "https://salitre-da613-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "salitre-da613",
  storageBucket: "salitre-da613.firebasestorage.app",
  messagingSenderId: "893950473504",
  appId: "1:893950473504:web:6e575142789f7ff8015345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;