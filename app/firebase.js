
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBbLyNKybkCPKi8XzD_edk7rGf1H5n54os",
  authDomain: "xr-royalty-app.firebaseapp.com",
  projectId: "xr-royalty-app",
  storageBucket: "xr-royalty-app.appspot.com",
  messagingSenderId: "1091224440283",
  appId: "1:1091224440283:web:f48ef0adf358e7ce192bfe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);