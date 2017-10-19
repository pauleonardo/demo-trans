import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDKHyQXQcb4JLiBbUSVVFWLth7gwX5P2fo',
  authDomain: 'techmarke-pappcorn.firebaseapp.com',
  databaseURL: 'https://techmarke-pappcorn.firebaseio.com',
  projectId: 'techmarke-pappcorn',
  storageBucket: 'techmarke-pappcorn.appspot.com',
  messagingSenderId: '494143635338',
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();

export default firebase;
