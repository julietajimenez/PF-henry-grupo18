// Import the functions you need from the SDKs you need



//CONFIGURACIÓN CRENDENCIALES DE FIREBASE, NO IMPORTA SI SON PÚBLICAS YA QUE NO DAN ACCESO A NADA

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_dSbx-Si6rXcrmMdBWu7S_MZVJ09Rryc",
  authDomain: "fir-correo-react-2e9e4.firebaseapp.com",
  projectId: "fir-correo-react-2e9e4",
  storageBucket: "fir-correo-react-2e9e4.appspot.com",
  messagingSenderId: "133354154747",
  appId: "1:133354154747:web:e14494483f430e91dbde5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
