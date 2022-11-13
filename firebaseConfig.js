import { initializeApp } from 'firebase/app';
import * as auth from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyApPaXXWV-qeUWopTu_ikSqOOT4ivAylS8",
    authDomain: "mealstogo-ba2ae.firebaseapp.com",
    projectId: "mealstogo-ba2ae",
    storageBucket: "mealstogo-ba2ae.appspot.com",
    messagingSenderId: "266221370307",
    appId: "1:266221370307:web:6e2ab389fc08d850045b76"
};

initializeApp(firebaseConfig);
const getAuth = auth.getAuth();

export const firebase = {
    auth,getAuth
}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
