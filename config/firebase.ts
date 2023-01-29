
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASz8qEYKsrgVyDZ-n9sIQ1GGUSymEo_ao",
  authDomain: "authy-2ba97.firebaseapp.com",
  projectId: "authy-2ba97",
  storageBucket: "authy-2ba97.appspot.com",
  messagingSenderId: "341658228538",
  appId: "1:341658228538:web:4ffb9254d36782f726e203",
  measurementId: "G-0R5HC4N9VQ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();