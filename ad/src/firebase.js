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