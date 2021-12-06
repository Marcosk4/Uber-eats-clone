import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAVIddv57iS1_UZ-i4uPqj_m2h1lhN4c10",
    authDomain: "uber-eats-clone-b7a50.firebaseapp.com",
    projectId: "uber-eats-clone-b7a50",
    storageBucket: "uber-eats-clone-b7a50.appspot.com",
    messagingSenderId: "96231092953",
    appId: "1:96231092953:web:7d64dd5ea523a046af84c8"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();

export {db}