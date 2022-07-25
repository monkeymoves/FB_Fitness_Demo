
import { initializeApp } from 'firebase/app'
import {getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATRpiUFZdantfiDWIC9ftj3DJsAZxE76Q",
    authDomain: "kampuswerk-9d9a8.firebaseapp.com",
    projectId: "kampuswerk-9d9a8",
    storageBucket: "kampuswerk-9d9a8.appspot.com",
    messagingSenderId: "713517347276",
    appId: "1:713517347276:web:cd20c5ce975a5470082d69",
    measurementId: "G-WNBKXCE24L"
  };

//iniit firebase
initializeApp(firebaseConfig)

//init services

const db = getFirestore()
const auth = getAuth()

export {db, auth}