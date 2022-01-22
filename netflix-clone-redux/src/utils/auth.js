import firebase from "firebase";

const config = {};

const firebaseApp = firebase.initializeApp(config);

//const database = firebaseApp.firestore();

export const auth = firebase.auth();
