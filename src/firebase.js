import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvT1QLdQ1Ihi8ipbSVG2u8ayRLwRQFR6A",
  authDomain: "blog-80bdf.firebaseapp.com",
  projectId: "blog-80bdf",
  storageBucket: "blog-80bdf.appspot.com",
  messagingSenderId: "86249131905",
  appId: "1:86249131905:web:c7471e46a488a0f147e280",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
