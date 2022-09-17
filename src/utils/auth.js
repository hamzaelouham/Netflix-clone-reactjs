import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2_PwbK5ZJjN7VLchf0QI3WU4-ZmPHXME",

  authDomain: "netflix-clone-egaledeve.firebaseapp.com",

  projectId: "netflix-clone-egaledeve",

  storageBucket: "netflix-clone-egaledeve.appspot.com",

  messagingSenderId: "542221349233",

  appId: "1:542221349233:web:fcd15e2021d198329846d0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//const database = firebaseApp.firestore();

export const auth = firebase.auth();
