import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDv4Y_ihZ1MhQ0jGNifkawMeGzmDvHkvsA",
  authDomain: "clone-b3618.firebaseapp.com",
  databaseURL: "https://clone-b3618.firebaseio.com",
  projectId: "clone-b3618",
  storageBucket: "clone-b3618.appspot.com",
  messagingSenderId: "1032886462301",
  appId: "1:1032886462301:web:9328317e6a93b1532aaab4",
  measurementId: "G-ZKGCXX7FDJ",
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export {  auth };
