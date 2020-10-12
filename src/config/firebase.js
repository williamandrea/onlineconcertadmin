import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDVyLqZDft5J-MbsQYfOZwghL2nFENowCs",
  authDomain: "concert-88b1c.firebaseapp.com",
  databaseURL: "https://concert-88b1c.firebaseio.com",
  projectId: "concert-88b1c",
  storageBucket: "concert-88b1c.appspot.com",
  messagingSenderId: "277237847385",
  appId: "1:277237847385:web:c6aaf09574009e8235e848"
};

firebase.initializeApp(firebaseConfig);
export default firebase