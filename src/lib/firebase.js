import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-77a17.firebaseapp.com",
  projectId: "reactchat-77a17",
  storageBucket: "reactchat-77a17.appspot.com",
  messagingSenderId: "532801026097",
  appId: "1:532801026097:web:a15c9a333cbd33b4e1fd10",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
