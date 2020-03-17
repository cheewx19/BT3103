import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA6F0oIdTiAh4N6ED7BP__-wg5Gj9m010c",
  authDomain: "bt3103-test-8ece6.firebaseapp.com",
  databaseURL: "https://bt3103-test-8ece6.firebaseio.com",
  projectId: "bt3103-test-8ece6",
  storageBucket: "bt3103-test-8ece6.appspot.com",
  messagingSenderId: "327917475278",
  appId: "1:327917475278:web:5886051bf6b49ae751879f",
  measurementId: "G-HVTYY98BSH"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();   
export default database;