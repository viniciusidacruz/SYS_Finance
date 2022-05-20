import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9Ms_BCp0hH3yHKUTjdy4RZtYaCFzkpUg",
  authDomain: "sys-finance-dev.firebaseapp.com",
  projectId: "sys-finance-dev",
  storageBucket: "sys-finance-dev.appspot.com",
  messagingSenderId: "128293498267",
  appId: "1:128293498267:web:3786232c093b6b6a54053e",
};

export const app = initializeApp(firebaseConfig);
