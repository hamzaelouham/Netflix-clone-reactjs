import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY_FIREBASE,

  authDomain: process.env.NEXT_PUBLIC_AUTH,

  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,

  storageBucket: process.env.NEXT_PUBLIC_STORAGE,

  messagingSenderId: process.env.NEXT_PUBLIC_SID,

  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
