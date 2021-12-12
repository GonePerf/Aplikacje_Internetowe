import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXt3IEIo_agSQL2lTC92BNMC6O7HYnAjM",
    authDomain: "aplikacje-internetowe-1a897.firebaseapp.com",
    projectId: "aplikacje-internetowe-1a897",
    storageBucket: "aplikacje-internetowe-1a897.appspot.com",
    messagingSenderId: "648096968271",
    appId: "1:648096968271:web:f3e95e30ade2dc82e8043a"
}


firebase.initializeApp(firebaseConfig)
const firestore = getFirestore()

export { firestore }