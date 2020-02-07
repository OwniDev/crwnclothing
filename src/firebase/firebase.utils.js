import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD8-R0SgX7pdoOElx97aCTSVknjPi_SVhA",
  authDomain: "crwn-db-f032f.firebaseapp.com",
  databaseURL: "https://crwn-db-f032f.firebaseio.com",
  projectId: "crwn-db-f032f",
  storageBucket: "crwn-db-f032f.appspot.com",
  messagingSenderId: "482054725854",
  appId: "1:482054725854:web:d82e6450a68badea07624f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// Give us access to this new GoogleAuthProvider class from the auth library
//it takes a couple custom parameters :
provider.setCustomParameters({prompt : 'select_account'});
//we always want to prompt the google pop up for authentication
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//We need to go back to our firebase project to allow such popups



export default firebase;