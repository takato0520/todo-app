import firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCAhaauu7LlTBLrgJxxueJQC9F8MDLPuEg",
    authDomain: "todoapp-test-ca880.firebaseapp.com",
    projectId: "todoapp-test-ca880",
    storageBucket: "todoapp-test-ca880.appspot.com",
    messagingSenderId: "20493954097",
    appId: "1:20493954097:web:fe437b879e654d17443910",
    measurementId: "G-QM08N8SL57"
}
firebase.initializeApp(firebaseConfig)

export default firebase