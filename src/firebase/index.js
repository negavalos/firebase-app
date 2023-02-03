// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging, getToken } from "firebase/messaging";
// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";

const vapidKey = "BFPEzNH2YH0LIncpeQ2SKc231cKaIFnpBCoGve-t-WTK0b652COxCH-CCoycbA_ScpvzhffdL1E-pumPFx6Uh38";

const firebaseConfig = {
  apiKey: "AIzaSyAN-ANXdewtN-sUaSC-w4_a8nggMzOZFZM",
  authDomain: "fir-app-baaa1.firebaseapp.com",
  projectId: "fir-app-baaa1",
  storageBucket: "fir-app-baaa1.appspot.com",
  messagingSenderId: "812999692855",
  appId: "1:812999692855:web:f07180048b2caa3d1965b2"
};

// const currentToken = "cW-1UNTTUEWloCmJ4HYmec:APA91bFn1b4xDsWv0FztN_J6T_ze60iZmVIY0s959qXmdDO1tkfmOAG0ThuWgbo4SMAZjbff_0JPUQHnbtQR0XHWMGzevVnybrjEBHOSaJVFx5ye68PjFYMhcXhsJWBsMoTPn2wnIyDX";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
getToken(messaging, { vapidKey }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    // console.log(currentToken);
    sendTokenServer(currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});


const sendTokenServer = (token) => {
  console.log(token);
  if (localStorage.getItem("tokenSendToServer")) return;
  //TODO implementar la logica que en el servidor se almacene el token
  localStorage.setItem("tokenSendToServer", "1");
}

export const db = getFirestore();