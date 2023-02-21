import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: "fb-clone-5e442.firebaseapp.com",
    projectId: "fb-clone-5e442",
    storageBucket: "fb-clone-5e442.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID
  };
  let app;
  if (getApps().length < 1) {
    app = initializeApp(firebaseConfig);
    // Initialize other firebase products here
  }
  const storage = getStorage(app);
  const db = getFirestore(app);

  export {db, storage}