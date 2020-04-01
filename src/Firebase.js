import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "lMg9PvXxHTaixc29nPs6CIK9cUf568Ap1t1Lb5mK",
  authDomain: "test-react-nativ.firebase.app.com",
  databaseURL: "https://test-react-nativ.firebaseio.com",
  projectId: "test-react-nativ",
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;