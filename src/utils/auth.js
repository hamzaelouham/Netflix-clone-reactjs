import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",

  authDomain: "",

  projectId: "netflix-clone-egaledeve",

  storageBucket: "",

  messagingSenderId: "",

  appId: "",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//const database = firebaseApp.firestore();

export const auth = firebase.auth();
