// src/services/firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa o AsyncStorage

// Firebase configuration (substitua pelos seus dados do Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyDVp1zW7lB8iUev3UbH3l3e5edqBHq0S9M",
  authDomain: "partilha-34c64.firebaseapp.com",
  projectId: "partilha-34c64",
  storageBucket: "partilha-34c64.appspot.com",
  messagingSenderId: "786609139448",
  appId: "1:786609139448:web:bbc0c5912e5a08a73a550d",
  measurementId: "G-DB6E0CBV77"
};

// Check if the Firebase app is already initialized
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig); // Inicializa o Firebase somente se ainda não estiver inicializado
} else {
  app = getApps()[0]; // Reutiliza o app existente
}

// Initialize Auth with AsyncStorage persistence (garantindo uma única inicialização)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Realtime Database
const database = getDatabase(app);

// Exportar os serviços que serão usados no app
export { auth, database };