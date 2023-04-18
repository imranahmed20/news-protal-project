// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPoD1ngRW_-duvhQBX6GTli8xQyS6UJpw",
    authDomain: "news-protal-project.firebaseapp.com",
    projectId: "news-protal-project",
    storageBucket: "news-protal-project.appspot.com",
    messagingSenderId: "778514164322",
    appId: "1:778514164322:web:9c28c81efaf76ef7e17f3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;