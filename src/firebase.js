import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtP-rpoXfO3yvGVH79e1XiI-TGGkC_JZ8",
    authDomain: "liquors-9a0aa.firebaseapp.com",
    projectId: "liquors-9a0aa",
    storageBucket: "liquors-9a0aa.appspot.com",
    messagingSenderId: "424452507100",
    appId: "1:424452507100:web:5d149392182df0177a3b19"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore=firebaseApp.firestore();
const storage = firebase.storage();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { 
  storage, firestore as default, auth, provider
}