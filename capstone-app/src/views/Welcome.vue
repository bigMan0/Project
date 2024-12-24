<template>
    <div id="welcome">
      <h1>Welcome to the Platform</h1>
      <div>
        <button @click="goToLogin">Login</button>
        <button @click="goToSignup">Sign Up</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToLogin() {
        this.$router.push('/login');
      },
      goToSignup() {
        this.$router.push('/signup');
      },
    },
  };
  </script>
  
  <style scoped>
  #welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
  }
  
  button {
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  