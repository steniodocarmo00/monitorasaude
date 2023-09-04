import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNhyFqLAfX5W_5Ic5G6r0quML-X-15mMs",
  authDomain: "girottos-map.firebaseapp.com",
  projectId: "girottos-map",
  storageBucket: "girottos-map.appspot.com",
  messagingSenderId: "232735894024",
  appId: "1:232735894024:web:53922cf088c119daf83fbd",
  measurementId: "G-29NDG3DVHG",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const Auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
