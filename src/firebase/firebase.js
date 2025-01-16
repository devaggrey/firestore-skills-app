import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDb70wVz8NJjmlhCg4mBbgSd_h-PBJpZuo",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "moringa-f20c9",
  storageBucket: "https://moringa-f20c9-default-rtdb.europe-west1.firebasedatabase.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "268278846790"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
