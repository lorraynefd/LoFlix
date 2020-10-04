
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBPdBOJqCD88g4RBLtfoxuFTk0uaz1nqNE",
  authDomain: "loflix-14e8c.firebaseapp.com",
  databaseURL: "https://loflix-14e8c.firebaseio.com",
  projectId: "loflix-14e8c",
  storageBucket: "loflix-14e8c.appspot.com",
  messagingSenderId: "816938243941",
  appId: "1:816938243941:web:5d51dbde27f977136b738c",
  measurementId: "G-CZ2SCGCR32"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;