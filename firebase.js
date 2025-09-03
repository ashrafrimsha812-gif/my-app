// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDUX6Q2Pb5YPimFuvJ1R1wouU8ahoUN4tw",
  authDomain: "emotion-tracking-app-6c13d.firebaseapp.com",
  projectId: "emotion-tracking-app-6c13d",
  storageBucket: "emotion-tracking-app-6c13d.firebasestorage.app",
  messagingSenderId: "63396922522",
  appId: "1:63396922522:web:1fdcc7c4d5643678830b23",
  measurementId: "G-PN5CWWH55H"
};

// Initialize Firebase
try {
  var  app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error);
}
// const app = initializeApp(firebaseConfig);

// Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };