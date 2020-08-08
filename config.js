import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAZTEETcTXmbnKbZsoolLCIjySaCOIuHmE",
  authDomain: "wily-appcontinue.firebaseapp.com",
  databaseURL: "https://wily-appcontinue.firebaseio.com",
  projectId: "wily-appcontinue",
  storageBucket: "wily-appcontinue.appspot.com",
  messagingSenderId: "593441543978",
  appId: "1:593441543978:web:19cdf0eda3adb898a5f053"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
