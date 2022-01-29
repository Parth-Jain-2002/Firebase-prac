import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-70fmUlojsLWmIGvsJBCl1XA23FqrBYc",
  authDomain: "fir-react-prac-ba1f1.firebaseapp.com",
  projectId: "fir-react-prac-ba1f1",
  storageBucket: "fir-react-prac-ba1f1.appspot.com",
  messagingSenderId: "408594496123",
  appId: "1:408594496123:web:b5e6e87472c487ce7ec0de",
  measurementId: "G-Q52LKYGD4K"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
