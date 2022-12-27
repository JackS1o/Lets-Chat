import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXepQEb6cTvvrsj9VdkhuiIXVSnOtQn8g",
  authDomain: "let-s-chat-e63f5.firebaseapp.com",
  projectId: "let-s-chat-e63f5",
  storageBucket: "let-s-chat-e63f5.appspot.com",
  messagingSenderId: "371076840998",
  appId: "1:371076840998:web:c55eb2f1d42bf6a8b9b0e7",
  measurementId: "G-HWF4V12JWN"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
