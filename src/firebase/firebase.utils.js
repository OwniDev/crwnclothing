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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //We first need to make sure that we're getting back a valid object :
  if(!userAuth) return; //if userAuth doesn't exist, we want to return from the function and go no further
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  // The Firestore library gives one out of two potention object : QueryReference or QuerySnapshot
  if (!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error)
    }
  }
  return userRef; 
}

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