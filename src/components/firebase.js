
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCmdX4r--buV-ejNEdpLVdM98vaUY_qNZE",
    authDomain: "react-indie.firebaseapp.com",
    projectId: "react-indie",
    storageBucket: "react-indie.appspot.com",
    messagingSenderId: "294170797334",
    appId: "1:294170797334:web:430fea5fc74d21e3c69c37"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)