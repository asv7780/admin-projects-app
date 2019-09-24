import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAxCkmHWwNIkxWtLU2Hc-6KoQtz6TFknfQ",
    authDomain: "react-projects-app-87212.firebaseapp.com",
    databaseURL: "https://react-projects-app-87212.firebaseio.com",
    projectId: "react-projects-app-87212",
    storageBucket: "",
    messagingSenderId: "90758661349",
    appId: "1:90758661349:web:0cb055edd9d8528a99000c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
