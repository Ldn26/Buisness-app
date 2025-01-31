// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcLoi6TUDFMCC7E3AfEZABXMMJpct_PgI",
  authDomain: "business-abddf.firebaseapp.com",
  projectId: "business-abddf",
  storageBucket: "business-abddf.appspot.com",
  messagingSenderId: "328184165262",
  appId: "1:328184165262:web:6066790601e37f18aaaadf",
  measurementId: "G-QQS48YFFEP",
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)
// const analytics = getAnalytics(app);
