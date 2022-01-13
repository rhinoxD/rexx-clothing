import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBDucRq8cNNfoEc3o9LJ6sFlCjvpqvTAt0',
  authDomain: 'crwn-db-ddebc.firebaseapp.com',
  projectId: 'crwn-db-ddebc',
  storageBucket: 'crwn-db-ddebc.appspot.com',
  messagingSenderId: '927713849738',
  appId: '1:927713849738:web:8ad7e44e81f9a50444d873',
  measurementId: 'G-GTDEM7M573',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
