<<<<<<< .mine
import firebase  from "firebase/compat/";


const firebaseConfig = {
    apiKey: "AIzaSyBViHLGRSxoXLcqtzS7fMLObnsOIRZpKcs",
    authDomain: "netflix-25384.firebaseapp.com",
    projectId: "netflix-25384",
    storageBucket: "netflix-25384.appspot.com",
    messagingSenderId: "491396760885",
    appId: "1:491396760885:web:b616caad472396635ff87c",
    measurementId: "G-E2Z2CCM2DG"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();


  export default storage;
=======
import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "netflix-151df.firebaseapp.com",
  projectId: "netflix-151df",
  storageBucket: "netflix-151df.appspot.com",
  messagingSenderId: "316700975498",
  appId: "1:316700975498:web:15063159b205c1a349a873",
  measurementId: "G-2ZGE63ES9F",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;



>>>>>>> .theirs
