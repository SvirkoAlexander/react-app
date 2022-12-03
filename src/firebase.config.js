
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
	apiKey: "AIzaSyBAHcgxj-KVXhtWBwETR2XkHgNATHw1pAM",
	authDomain: "sammy-8af10.firebaseapp.com",
	projectId: "sammy-8af10",
	storageBucket: "sammy-8af10.appspot.com",
	messagingSenderId: "268050084000",
	appId: "1:268050084000:web:540b74f36501c5612b59c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)



export default app
