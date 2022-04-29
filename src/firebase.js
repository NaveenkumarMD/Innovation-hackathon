import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAk5go6VlGe9cvE2-5mjZ_tkPLsoxDHzfo",
  authDomain: "archive-39cf2.firebaseapp.com",
  projectId: "archive-39cf2",
  storageBucket: "archive-39cf2.appspot.com",
  messagingSenderId: "1013930689771",
  appId: "1:1013930689771:web:886ce7acf65e69a1b8aaae",
  measurementId: "G-0LC2D8L643",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
