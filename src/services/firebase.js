import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAbyaZw_W3fPRXXu54-XDaTujvEkHD6NHk',
  authDomain: 'onesight-84f81.firebaseapp.com',
  databaseURL: 'https://onesight-84f81.firebaseio.com',
  projectId: 'onesight-84f81',
  storageBucket: 'onesight-84f81.appspot.com',
  messagingSenderId: '165614321612',
  appId: '1:165614321612:web:15855e6a601cde87276769',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
