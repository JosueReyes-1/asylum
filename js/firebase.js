// Import the functions you need from the SDKs you need

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getFirestore,collection,addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyACyGmIDx4M_MsibQU34AIX2JPm-0Io160",

    authDomain: "asylum-b1daa.firebaseapp.com",

    databaseURL: "https://asylum-b1daa-default-rtdb.firebaseio.com",

    projectId: "asylum-b1daa",

    storageBucket: "asylum-b1daa.appspot.com",

    messagingSenderId: "748078266435",

    appId: "1:748078266435:web:f136843f10a2379007bcf6",

    measurementId: "G-Y5S0BZ62S6"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db=getFirestore();

export const savetask=(nombre,email,mensaje)=>
    addDoc(collection(db,"Contactos"),{nombre,email,mensaje});


const analytics = getAnalytics(app);
