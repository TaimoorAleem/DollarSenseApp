import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBUFnvEY9_XW_UR2cl7WUzY-d26WAqeN-4",
    authDomain: "dollarsense-bed1e.firebaseapp.com",
    projectId: "dollarsense-bed1e",
    storageBucket: "dollarsense-bed1e.appspot.com",
    messagingSenderId: "519984634681",
    appId: "1:519984634681:web:341a4a0353ce0dc59da6e8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);