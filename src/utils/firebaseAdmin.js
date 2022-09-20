import admin from "firebase-admin";

const servicesAccount = require("./secrets.json");

export async function verifyTokenId(token) {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(servicesAccount),
      databaseURL: process.env.NEXT_PUBLIC_DB_UR,
    });
  }
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
}
