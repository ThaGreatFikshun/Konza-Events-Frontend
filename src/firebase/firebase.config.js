import { initializeApp, } from "firebase/app";
import { getStorage } from "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyDHXFbS6BlFBZSlJJPYETJXjXa4CJXmr3s",
    authDomain: "events-mgt-platform.firebaseapp.com",
    projectId: "events-mgt-platform",
    storageBucket: "events-mgt-platform.appspot.com",
    messagingSenderId: "1041982722879",
    appId: "1:1041982722879:web:0667a68d767f92b79af98a",
    measurementId: "G-N5YLY0EXMW"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app