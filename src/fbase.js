import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.DEMO_SAMPLE_API_KEY,
  authDomain: process.env.DEMO_SAMPLE_AUTH_DOMAIN,
  projectId: process.env.DEMO_SAMPLE_PROJECT_ID,
  storageBucket: process.env.DEMO_SAMPLE_STORAGE_BUCKET,
  messagingSenderId: process.env.DEMO_SAMPLE_MESSAGING_SENDER_ID,
  appId: process.env.DEMO_SAMPLE_APP_ID,
  measurementId: process.env.DEMO_SAMPLE_APP_MEASUREMENT_ID
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);


export { storage, app as default };