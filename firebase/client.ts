import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnfm7SrIDwFe9XY61WwjbiDNhXiaKQM78",
  authDomain: "resonanceai-bfaea.firebaseapp.com",
  projectId: "resonanceai-bfaea",
  storageBucket: "resonanceai-bfaea.firebasestorage.app",
  messagingSenderId: "990715223750",
  appId: "1:990715223750:web:fb37313d4f2bf4978d41c7",
  measurementId: "G-KSL1GXP0WN"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
