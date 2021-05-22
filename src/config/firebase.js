import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCKgv7ngh_sXHLqLemPL9xXCqqL6rWIUBA",
  authDomain: "todo-app-3802b.firebaseapp.com",
  projectId: "todo-app-3802b",
  storageBucket: "todo-app-3802b.appspot.com",
  messagingSenderId: "531781333596",
  appId: "1:531781333596:web:944c00c3ee70f22043ac99"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
