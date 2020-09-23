import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9tGukHUKp0LSM6mbT0yZ8rh3lkavPU3I",
  authDomain: "instagram-clone-react-aa50b.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-aa50b.firebaseio.com",
  projectId: "instagram-clone-react-aa50b",
  storageBucket: "instagram-clone-react-aa50b.appspot.com",
  messagingSenderId: "304652567853",
  appId: "1:304652567853:web:099638199cf0e4fc8dffa4",
  measurementId: "G-GX02G3X5TY",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
