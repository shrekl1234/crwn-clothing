import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCMvqdh0k_JovcWkTbHQBD87AabfoCm_4Q",
  authDomain: "crown-db-d71df.firebaseapp.com",
  databaseURL: "https://crown-db-d71df.firebaseio.com",
  projectId: "crown-db-d71df",
  storageBucket: "crown-db-d71df.appspot.com",
  messagingSenderId: "579509201843",
  appId: "1:579509201843:web:5da8994c4e041765db39c6",
  measurementId: "G-XTMLWGGJF0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase; 