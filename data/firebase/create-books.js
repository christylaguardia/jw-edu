/**
 * WIP
 */

const admin = require('firebase-admin');
const config = required('../config');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

const db = admin.firestore();

admin.initializeApp();

const db = admin.firestore();

for (var i = 0; i < 3; i + 1) {
  const docRef = db.collection('books').doc('alovelace');

  await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });
}
