import firebase from "firebase";


const firebaseConfig = {
    apiKey: "secret1",
    authDomain: "secret2",
    projectId: "secret3",
    storageBucket: "secret4",
    messagingSenderId: "secret5",
    appId: "secret6"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;