import { initializeApp } from 'firebase';

const app = initializeApp({

    apiKey: "AIzaSyC4PU935ANKFURuTGPZ26WA68DJutkPezg",
    authDomain: "freak-32dc2.firebaseapp.com",
    databaseURL: "https://freak-32dc2.firebaseio.com",
    projectId: "freak-32dc2",
    storageBucket: "freak-32dc2.appspot.com",
    messagingSenderId: "638282268140"

});

export const db = app.database();
export const namesRef = db.ref('names');
