import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAvJ622g2h6k2-28vpg_TXMthenm9qXwrs",
    authDomain: "react-app-curso-70deb.firebaseapp.com",
    projectId: "react-app-curso-70deb",
    storageBucket: "react-app-curso-70deb.appspot.com",
    messagingSenderId: "657454065981",
    appId: "1:657454065981:web:c4d601a01d48f27f3ebd54",
    measurementId: "G-Q1P8SDQL4E"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase
  }