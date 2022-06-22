import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {

    apiKey: "AIzaSyDPh1EhlN2UupL3BkLFW5lM4mUX4pTJUJM",
  
    authDomain: "netlynxs-de2eb.firebaseapp.com",
  
    databaseURL: "https://netlynxs-de2eb-default-rtdb.firebaseio.com",
  
    projectId: "netlynxs-de2eb",
  
    storageBucket: "netlynxs-de2eb.appspot.com",
  
    messagingSenderId: "32395279877",
  
    appId: "1:32395279877:web:24756bea9d1aa69670a66c",
  
    measurementId: "G-E0H24D01M6"
  
  };
  const app=initializeApp(firebaseConfig);
  export const db=getFirestore(app);