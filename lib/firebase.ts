import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBzyxHkmUIZItnQM6Rkt65hXxGRDowrWH0",
    authDomain: "pen-chat-93f7a.firebaseapp.com",
    projectId: "pen-chat-93f7a",
    storageBucket: "pen-chat-93f7a.firebasestorage.app",
    messagingSenderId: "863666502169",
    appId: "1:863666502169:web:5de19338551751b7b80888",
    measurementId: "G-SHJJ4FXG7T"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);