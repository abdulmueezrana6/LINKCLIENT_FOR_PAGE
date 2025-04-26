// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCLQdwhoGIcMcWl6ZEd9fHMcImyIJALmvk",
  authDomain: "link26-78e6f.firebaseapp.com",
  projectId: "link26-78e6f",
  storageBucket: "link26-78e6f.firebasestorage.app",
  messagingSenderId: "966987055160",
  appId: "1:966987055160:web:a4cd4e24800ba267be66cd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
