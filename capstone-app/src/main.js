import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS bundle


// Set global defaults for Axios
axios.defaults.baseURL = 'http://localhost:5000'; // Update this with your API endpoint
axios.defaults.headers = {
  'Content-Type': 'application/json',
};

// Create and mount the app
createApp(App).use(router).mount('#app');
