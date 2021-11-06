import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCcIOAQIcqKoJgVIuC3sK1sK_S-_RYUkVI",
  authDomain: "clone-git.firebaseapp.com",
  projectId: "clone-git",
  storageBucket: "clone-git.appspot.com",
  messagingSenderId: "749730161364",
  appId: "1:749730161364:web:5a3c33f61cefb1f1181141"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};