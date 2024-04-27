import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE,
	authDomain: "usebank-8fae0.firebaseapp.com",
	projectId: "usebank-8fae0",
	storageBucket: "usebank-8fae0.appspot.com",
	messagingSenderId: "976157035965",
	appId: "1:976157035965:web:506357fd95691d4c97d6d4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getDatabase();
