import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3qlnqqUFVnDxJioRPMfMlQkLFMvzkEtg",
  authDomain: "perspektiva-146fb.firebaseapp.com",
  projectId: "perspektiva-146fb",
  storageBucket: "perspektiva-146fb.appspot.com",
  messagingSenderId: "765486677068",
  appId: "1:765486677068:web:a0e38ba2c60fa45c71c8e9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
