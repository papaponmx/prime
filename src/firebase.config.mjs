import firebase from 'firebase';


// This is a template file, complete with your app data;
export const config = {
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'xxxxxxxxxxxx.firebaseapp.com',
  databaseURL: 'xxxxxxxxxxxxxxxxxxxx',
  projectId: 'PROJECT_ID',
  storageBucket: 'xxxxxx',
  messagingSenderId: 'xxxxxxxxxxxxxxxxxx'
}

// This is what you should use on sagas
export const app = firebase.initializeApp(config);
export const database = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
