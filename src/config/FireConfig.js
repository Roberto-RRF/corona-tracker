import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD4VG-G7NkF18ZqOApj9dob3EXSsVO9Rbg",
    authDomain: "corona-yucatan-tracker.firebaseapp.com",
    projectId: "corona-yucatan-tracker",
    storageBucket: "corona-yucatan-tracker.appspot.com",
    messagingSenderId: "38966522642",
    appId: "1:38966522642:web:0e0a8a31dca9e6acfcb9cb",
    measurementId: "G-0JBP2CS6LY"
};

// Initialize Firebase
// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;


