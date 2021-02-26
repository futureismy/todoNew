import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDnl_YQerjOjIkoyJu0KklVtocgj3oAOQI",
  authDomain: "todoapp-e2b7c.firebaseapp.com",
  projectId: "todoapp-e2b7c",
  storageBucket: "todoapp-e2b7c.appspot.com",
  messagingSenderId: "482031236265",
  appId: "1:482031236265:web:e62ca76e3a2223221765b8",
  measurementId: "G-VCQ546FMJR"
};
  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()

  export {db}