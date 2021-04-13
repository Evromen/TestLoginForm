import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: "evromen-radrix.firebaseapp.com",
    projectId: "evromen-radrix",
    storageBucket: "evromen-radrix.appspot.com",
    messagingSenderId: "952668338930",
    appId: "1:952668338930:web:45a6575ea0f61f086c6e6b"
};
firebase.initializeApp(firebaseConfig)
createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
