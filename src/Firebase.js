import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3hlaqGto32Torfcev3ecc-FBbhN-wcfA",
  authDomain: "twitter-clone-5f9d0.firebaseapp.com",
  databaseURL: "https://twitter-clone-5f9d0.firebaseio.com",
  projectId: "twitter-clone-5f9d0",
  storageBucket: "twitter-clone-5f9d0.appspot.com",
  messagingSenderId: "592963344999",
  appId: "1:592963344999:web:0898a590f76bb23e5ad2c2",
  measurementId: "G-HE016K0VHH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
