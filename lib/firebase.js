import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import { initializeApp } from "firebase/app";

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
