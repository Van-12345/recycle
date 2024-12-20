// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAqBoBqlw4D9VrQmZwiDdPPEetUVEgRCoc",
    authDomain: "webvr-231e5.firebaseapp.com",
    projectId: "webvr-231e5",
    storageBucket: "webvr-231e5.firebasestorage.app",
    messagingSenderId: "612677376965",
    appId: "1:612677376965:web:3f218c3090febef41209ac",
    measurementId: "G-ME42FZ1L7F"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
