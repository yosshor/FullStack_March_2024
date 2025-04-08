// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClHzUCwCdl_9SRGEHFIZQ9cOGLQYcTjQM",
    authDomain: "int-demo01-dev.firebaseapp.com",
    projectId: "int-demo01-dev",
    storageBucket: "int-demo01-dev.firebasestorage.app",
    messagingSenderId: "758399565187",
    appId: "1:758399565187:web:df599786a7d263a7c88ab6",
    measurementId: "G-Q16SVY6K7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app); // Optional
const auth = getAuth(app); // If using Firebase Authentication
const db = getFirestore(app); // If using Firestore
const storage = getStorage(app); // If using Storage

if (import.meta.env.DEV) {
    // connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(db, 'localhost', 8080);
    // connectStorageEmulator(storage, 'localhost', 9199);
    console.log('Using Firebase emulators');
}

// Export the Firebase services for use in other components
export { app, analytics, auth, db, storage };