<template>
    <div id="dashboard">
      <h1>Welcome, {{ user.name }}</h1>
      <p>Your role: {{ user.role }}</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')) || {},
    };
  },
  mounted() {
    const token = localStorage.getItem('authToken');
    console.log('Token found on dashboard mount:', token);
    if (!token) {
      this.$router.push('/login'); // If no token, redirect to login
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      this.$router.push('/login'); // Redirect to login after logout
    },
  },
};


  </script>
  
  <style scoped>
  /* Style your dashboard here */
  </style>
  