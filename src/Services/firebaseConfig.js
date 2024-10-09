import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAvvRsTW-xbuzer_rky5YkQEIwhg0X0Ew0",
    authDomain: "simuladorhipoteca-firebase.firebaseapp.com",
    projectId: "simuladorhipoteca-firebase",
    storageBucket: "simuladorhipoteca-firebase.appspot.com",
    messagingSenderId: "607037170226",
    appId: "1:607037170226:web:4a7d4411f3773d2a41922b",
    measurementId: "G-C8Y7GRE361"
  };

  
const appFirebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(appFirebase);

export default appFirebase

export const auth = getAuth(appFirebase)
export const db = getFirestore(appFirebase);