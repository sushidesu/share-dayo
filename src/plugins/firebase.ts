import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const config = {
  apiKey: "AIzaSyBDaDpF-yTPziXXb7LTvDmB4nFX7-se1No",
  authDomain: "share-dayo.firebaseapp.com",
  databaseURL: "https://share-dayo-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "share-dayo",
  storageBucket: "share-dayo.appspot.com",
  messagingSenderId: "298026806",
  appId: "1:298026806:web:bcfc052a2adaeef75ed597"
}

export const app = initializeApp(config)
export const database = getDatabase(app)
