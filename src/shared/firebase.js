import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD7ZbUzhyIOwPyY6PcOqcJSVkZXSmAOBK8",
  authDomain: "quick-react-c282d.firebaseapp.com",
  databaseURL: "https://quick-react-c282d.firebaseio.com",
  projectId: "quick-react-c282d",
  storageBucket: "quick-react-c282d.appspot.com",
  messagingSenderId: "32319431406",
  appId: "1:32319431406:web:07e55bcf84b8f0903009ff"
};
  
firebase.initializeApp(firebaseConfig);

export default firebase;
