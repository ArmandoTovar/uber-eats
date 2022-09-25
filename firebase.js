import firebase from 'firebase';
// Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyD0qpk6vVOAG7fa4V3HEJhSRxmNBL6PRWg",
  authDomain: "ubereats-486fe.firebaseapp.com",
  projectId: "ubereats-486fe",
  storageBucket: "ubereats-486fe.appspot.com",
  messagingSenderId: "476203678674",
  appId: "1:476203678674:web:df75912f22cf709e0f660b"
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;