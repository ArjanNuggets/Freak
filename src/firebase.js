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
export const redDead = db.ref('redDead');
export const nba = db.ref('nba');
export const spiderman = db.ref('spiderman');
export const mario = db.ref('mario');
export const gow = db.ref('gow');
export const name = db.ref('name');
