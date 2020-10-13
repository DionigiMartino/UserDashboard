import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/app'

// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyDBGOtnhhwgdMwGGxyyxo2rK8wXyoB2SVM",
    authDomain: "gestionaleaicon.firebaseapp.com",
    databaseURL: "https://gestionaleaicon.firebaseio.com",
    projectId: "gestionaleaicon",
    storageBucket: "gestionaleaicon.appspot.com",
    messagingSenderId: "589363531849",
    appId: "1:589363531849:web:a384fd965417d876f3ef98",
    measurementId: "G-EPFRCREN49"
};

firebase.initializeApp(firebaseConfig);
firebase.auth();

export default {
    firebaseConfig
};
