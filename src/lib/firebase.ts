// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD8lHvWsd_k-vUo0Cb4XYuoUVUg7wmPLx4',
	authDomain: 'melhor-preco-app-fb.firebaseapp.com',
	projectId: 'melhor-preco-app-fb',
	storageBucket: 'melhor-preco-app-fb.appspot.com',
	messagingSenderId: '820544719670',
	appId: '1:820544719670:web:89a4b0396ad0b571130197',
	measurementId: 'G-5118KEVB4L'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
