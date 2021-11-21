import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCu44gcMKJb-uvZ-kWvBH9JmdBoLef5LHg",
  authDomain: "facebook-72a2e.firebaseapp.com",
  projectId: "facebook-72a2e",
  storageBucket: "facebook-72a2e.appspot.com",
  messagingSenderId: "138550176236",
  appId: "1:138550176236:web:05aced44d8afc5215df8c9",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firebase();
const storage = firebase.storage();

export { db, storage };
