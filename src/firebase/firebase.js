import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyADOu0fiD4vrhSHg80k4_nFeeqFO8z9UAQ",
  
    authDomain: "chat-app-1b9f4.firebaseapp.com",
  
    projectId: "chat-app-1b9f4",
  
    storageBucket: "chat-app-1b9f4.firebasestorage.app",
  
    messagingSenderId: "613990540334",
  
    appId: "1:613990540334:web:1f2c191954ab7b41d92bbf"
  
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

    export { auth, db };