import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC2hewm1Ipca-S3UMoSczbnDfvg9b7c55w",
    authDomain: "resume-builder-b40ac.firebaseapp.com",
    projectId: "resume-builder-b40ac",
    storageBucket: "resume-builder-b40ac.appspot.com",
    messagingSenderId: "333446158783",
    appId: "1:333446158783:web:4ffbb4c3ab608ed673290a"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;