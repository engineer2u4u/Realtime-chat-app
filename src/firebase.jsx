import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "react-firebase-chat-app-e3ad2.firebaseapp.com",
    projectId: "react-firebase-chat-app-e3ad2",
    storageBucket: "react-firebase-chat-app-e3ad2.appspot.com",
    messagingSenderId: import.meta.env.VITE_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
