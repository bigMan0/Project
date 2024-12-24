<template>
  <div id="app">
    <Header /> <!-- Always visible at the top -->
    <div class="content">
      <router-view /> <!-- Renders the current route's view -->
    </div>
    <Footer /> <!-- Footer will appear at the bottom -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style>
/* Ensure full height of the page */
html, body {
  height: 100%;
  margin: 0;
}

/* App container takes at least the full height */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the content area fills the viewport */
}

/* Ensure the content area takes up the remaining space and pushes footer */
.content {
  flex-grow: 1; /* Makes the content area flexible and takes remaining space */
}

/* Navbar should always be at the top */
header {
  position: sticky; /* Keeps the navbar at the top */
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  padding: 10px 0; /* Adjust padding as needed */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Adds shadow to navbar */
  text-align: center;
}

/* Footer should appear at the bottom only when necessary */
footer {
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  margin-top: auto; /* Pushes footer to the bottom if content is short */
}
</style>
