import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKzcuKl1EGcZhLO4lYxogLIL4vu0TkZS0",
    authDomain: "route-protection-97e44.firebaseapp.com",
    projectId: "route-protection-97e44",
    storageBucket: "route-protection-97e44.appspot.com",
    messagingSenderId: "247656422008",
    appId: "1:247656422008:web:91d53a4f12207e82cd6b8d"
  };

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth()

export {projectAuth}

