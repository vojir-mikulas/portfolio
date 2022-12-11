import { getFirestore, collection, getDocs  } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyBOZHuCNd891yxeSYya43aVAv6XNxk-nls",

    authDomain: "vojir-io.firebaseapp.com",

    projectId: "vojir-io",

    storageBucket: "vojir-io.appspot.com",

    messagingSenderId: "248627611303",

    appId: "1:248627611303:web:76f506892834f0f179bd82",

    measurementId: "G-9WGRYWHV76"
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage =  getStorage(app)