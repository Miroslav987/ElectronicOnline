import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiBO5HBoLz7EZGsQC1CBWuLRabYRYS10U",
  authDomain: "js25-crud.firebaseapp.com",
  projectId: "js25-crud",
  storageBucket: "js25-crud.appspot.com",
  messagingSenderId: "632523800207",
  appId: "1:632523800207:web:c8cf6aa137a31cb8763afa",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
console.log(fire);
export default fire;
