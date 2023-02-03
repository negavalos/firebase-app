importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAN-ANXdewtN-sUaSC-w4_a8nggMzOZFZM",
    authDomain: "fir-app-baaa1.firebaseapp.com",
    projectId: "fir-app-baaa1",
    storageBucket: "fir-app-baaa1.appspot.com",
    messagingSenderId: "812999692855",
    appId: "1:812999692855:web:f07180048b2caa3d1965b2"
  });

  const messaging = firebase.messaging();

//   messaging.onBackgroundMessage(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Titulo de la notificacion';
//     const notificationOptions = {
//       body: 'Este es el body',
//       icon: 'https://img.icons8.com/color/480/firebase.png'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });