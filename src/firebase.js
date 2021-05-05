import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyD5RibPhMkwANu09xTCqISSbgdGYL-4zKA",
    authDomain: "netfilx-clone-b0e03.firebaseapp.com",
    projectId: "netfilx-clone-b0e03",
    storageBucket: "netfilx-clone-b0e03.appspot.com",
    messagingSenderId: "1039191023632",
    appId: "1:1039191023632:web:0bbd405ec99df2e1d2aa95"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();


export {auth};//explicite export
export default db;//default export