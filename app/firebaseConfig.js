// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAQO4XuMVfdgnGu07NBIwLwRyjkK_tcwM",
  authDomain: "rimshalabs-ed867.firebaseapp.com",
  projectId: "rimshalabs-ed867",
  storageBucket: "rimshalabs-ed867.firebasestorage.app",
  messagingSenderId: "587541047334",
  appId: "1:587541047334:web:81406fe26e77b320789ee7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
