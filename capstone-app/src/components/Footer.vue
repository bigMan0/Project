<template>
    <footer class="footer bg-dark text-white text-center py-3">
      <div class="container">
        <p class="mb-0">© 2024 MyApp. All rights reserved.</p>
        <div>
          <router-link to="/privacy-policy" class="text-white">Privacy Policy</router-link> |
          <router-link to="/terms" class="text-white">Terms & Conditions</router-link>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #343a40;
  }
  
  .footer a {
    color: #fff;
    text-decoration: none;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }
  </style>
  