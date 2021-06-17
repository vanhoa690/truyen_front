import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

if (!firebase.apps.length) {
  firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID

    apiKey: "AIzaSyAPnQmU324rXJU47D9pikbI-rhw7YEUmi0",
    authDomain: "linkedin-nextjs.firebaseapp.com",
    databaseURL: "https://linkedin-nextjs-default-rtdb.firebaseio.com",
    projectId: "linkedin-nextjs",
    storageBucket: "linkedin-nextjs.appspot.com",
    messagingSenderId: "225624600710",
    appId: "1:225624600710:web:4af41422a9fc3b38d9e107"
  })
}

export default firebase

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app()

// const db = app.firestore()
// export default app
// export default function initFirebase() {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
//   }
// }
