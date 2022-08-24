import {initializeApp} from "@firebase/app";
import {getFirestore , collection} from "@firebase/firestore";
import {getAuth , GoogleAuthProvider} from "@firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC-aoSLTqIb2b3s3uKlTrFuwJeA5pRqQD4",
    authDomain: "solo-message-product.firebaseapp.com",
    projectId: "solo-message-product",
    storageBucket: "solo-message-product.appspot.com",
    messagingSenderId: "462760800868",
    appId: "1:462760800868:web:24c52369231e690a69a571"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()
export const auth = getAuth()
export const userCollection = collection(db , 'user')
export const googleProvider = new GoogleAuthProvider()