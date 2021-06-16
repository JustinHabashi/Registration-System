import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBFzp9BUh7PWG5mssUNj2aRRnGDy3L9yfU",
    authDomain: "registration-system-fd131.firebaseapp.com",
    projectId: "registration-system-fd131",
    storageBucket: "registration-system-fd131.appspot.com",
    messagingSenderId: "672065786696",
    appId: "1:672065786696:web:fe6a51162184e426a3597d"
  };
  // Initialize Firebase

  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  