import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4kPp2BdXIQGB9cd-NY9mE7fkdvGi15aA",
  authDomain: "skai-48c23.firebaseapp.com",
  databaseURL: "https://skai-48c23.firebaseio.com",
  projectId: "skai-48c23",
  storageBucket: "skai-48c23.appspot.com",
  messagingSenderId: "28887708291",
  appId: "1:28887708291:web:550b6108faecdd79a3e1b6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };