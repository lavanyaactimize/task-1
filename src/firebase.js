
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArWg4UrrOxnHXkxIsor3FcbQQCKyf6tJo",
  authDomain: "codecademy-7f8e6.firebaseapp.com",
  databaseURL: "https://codecademy-7f8e6-default-rtdb.firebaseio.com",
  projectId: "codecademy-7f8e6",
  storageBucket: "codecademy-7f8e6.appspot.com",
  messagingSenderId: "946713288150",
  appId: "1:946713288150:web:ecb1ea8dd04ef4b201d877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
 export const auth = getAuth(app);
 export{googleAuthProvider,facebookAuthProvider};